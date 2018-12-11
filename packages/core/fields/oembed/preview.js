/**
 * External dependencies.
 */
import { Component, renderToString } from '@wordpress/element';

class OembedPreview extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			width: 0,
			height: 0
		};

		this.renderIframe = this.renderIframe.bind( this );
		this.checkMessageForResize = this.checkMessageForResize.bind( this );
	}

	isFrameAccessible() {
		try {
			return !! this.iframe.contentDocument.body;
		} catch ( e ) {
			return false;
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		window.addEventListener( 'message', this.checkMessageForResize, false );

		this.renderIframe();
	}

	/**
	 * Lifecycle Hook.
	 *
	 * @return {void}
	 */
	componentDidUpdate() {
		this.renderIframe();
	}

	checkMessageForResize( event ) {
		const iframe = this.iframe;

		// Attempt to parse the message data as JSON if passed as string
		let data = event.data || {};
		if ( 'string' === typeof data ) {
			try {
				data = JSON.parse( data );
			} catch ( e ) {} // eslint-disable-line no-empty
		}

		// Verify that the mounted element is the source of the message
		if ( ! iframe || iframe.contentWindow !== event.source ) {
			return;
		}

		// Update the state only if the message is formatted as we expect, i.e.
		// as an object with a 'resize' action, width, and height
		const { action, width, height } = data;
		const { width: oldWidth, height: oldHeight } = this.state;

		if ( 'resize' === action && ( oldWidth !== width || oldHeight !== height ) ) {
			this.setState( { width, height } );
		}
	}

	/**
	 * Render Method.
	 *
	 * @return {Object}
	 */
	render() {
		return <div className="cf-oembed__preview">
			<iframe
				ref={ ( node ) => this.iframe = node }
				scrolling="no"
				className="cf-oembed__frame"
				onLoad={ this.renderIframe }
				width={ Math.ceil( this.state.width ) }
				height={ Math.ceil( this.state.height ) }
			/>
		</div>;
	}

	renderIframe() {
		if ( ! this.isFrameAccessible() ) {
			return;
		}

		const body = this.iframe.contentDocument.body;
		if ( null !== body.getAttribute( 'data-resizable-iframe-connected' ) ) {
			return;
		}

		const heightCalculation = 'video' === this.props.type ? 'clientBoundingRect.width / 16 * 9' : 'clientBoundingRect.height';

		const observeAndResizeJS = `
			( function() {
				var observer;

				if ( ! window.MutationObserver || ! document.body || ! window.parent ) {
					return;
				}

				function sendResize() {
					var clientBoundingRect = document.body.getBoundingClientRect();

					window.parent.postMessage( {
						action: 'resize',
						width: clientBoundingRect.width,
						height: ${ heightCalculation }
					}, '*' );
				}

				observer = new MutationObserver( sendResize );
				observer.observe( document.body, {
					attributes: true,
					attributeOldValue: false,
					characterData: true,
					characterDataOldValue: false,
					childList: true,
					subtree: true
				} );

				window.addEventListener( 'load', sendResize, true );

				// Hack: Remove viewport unit styles, as these are relative
				// the iframe root and interfere with our mechanism for
				// determining the unconstrained page bounds.

				function removeViewportStyles( ruleOrNode ) {
					[ 'width', 'height', 'minHeight', 'maxHeight' ].forEach( function( style ) {
						if ( /^\\d+(vmin|vmax|vh|vw)$/.test( ruleOrNode.style[ style ] ) ) {
							ruleOrNode.style[ style ] = '';
						}
					} );
				}

				Array.prototype.forEach.call( document.querySelectorAll( '[style]' ), removeViewportStyles );
				Array.prototype.forEach.call( document.styleSheets, function( stylesheet ) {
					Array.prototype.forEach.call( stylesheet.cssRules || stylesheet.rules, removeViewportStyles );
				} );
				document.body.setAttribute( 'data-resizable-iframe-connected', '' );
				sendResize();
		} )();`;

		const style = `
			body { margin: 0; }

			body > div { max-width: 600px; }

			body.Kickstarter > div,
			body.video > div { position: relative; height: 0; padding-bottom: 56.25%; }
			body.Kickstarter > div > iframe,
			body.video > div > iframe { position: absolute; width: 100%; height: 100%; top: 0; left: 0; }

			body > div > * { margin: 0 !important;/* has to have !important to override inline styles */ max-width: 100%; }

			body.Flickr > div > a { display: block; }
			body.Flickr > div > a > img { width: 100%; height: auto; }
		`;

		const htmlDoc = (
			<html lang={ document.documentElement.lang }>
				<head>
					<style dangerouslySetInnerHTML={ { __html: style } } />
				</head>

				<body data-resizable-iframe-connected="data-resizable-iframe-connected" className={ this.props.type + ' ' + this.props.provider }>
					<div dangerouslySetInnerHTML={ { __html: this.props.html } } />
					<script type="text/javascript" dangerouslySetInnerHTML={ { __html: observeAndResizeJS } } />
				</body>
			</html>
		);

		this.iframe.contentWindow.document.open();
		this.iframe.contentWindow.document.write( '<!DOCTYPE html>' + renderToString( htmlDoc ) );
		this.iframe.contentWindow.document.close();
	}
}

export default OembedPreview;
