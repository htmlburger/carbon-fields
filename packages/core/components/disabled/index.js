/**
 * External dependencies
 */
import { Component, createRef } from '@wordpress/element';
import { includes, debounce } from 'lodash';

/**
 * Internal dependencies.
 */
import { Provider, Consumer } from './context';

/**
 * Names of control nodes which qualify for disabled behavior.
 *
 * See WHATWG HTML Standard: 4.10.18.5: "Enabling and disabling form controls: the disabled attribute".
 *
 * @link https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute
 *
 * @type {string[]}
 */
const DISABLED_ELIGIBLE_NODE_NAMES = [
	'BUTTON',
	'FIELDSET',
	'INPUT',
	'OPTGROUP',
	'OPTION',
	'SELECT',
	'TEXTAREA'
];

/**
 * Disables descendant tabbable elements and prevents pointer interaction.
 *
 * @borrows https://github.com/WordPress/gutenberg/blob/master/packages/components/src/disabled/index.js
 */
class Disabled extends Component {
	/**
	 * Keeps reference to the DOM node.
	 */
	node = createRef();

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.disable();

		this.observer = new window.MutationObserver( this.disable );

		this.observer.observe( this.node.current, {
			childList: true,
			attributes: true,
			subtree: true
		} );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.observer.disconnect();
		this.disable.cancel();
	}

	/**
	 * Disables all elements.
	 *
	 * @return {void}
	 */
	disable = debounce( () => {
		this.node.current.querySelectorAll( `
			[tabindex],
			button:not([disabled]),
			input:not([type="hidden"]):not([disabled]),
			select:not([disabled]),
			textarea:not([disabled]),
			iframe,
			object,
			embed,
			[contenteditable]:not([contenteditable=false])
		` ).forEach( ( node ) => {
			if ( includes( DISABLED_ELIGIBLE_NODE_NAMES, node.nodeName ) ) {
				node.setAttribute( 'disabled', '' );
			}

			if ( node.hasAttribute( 'tabindex' ) ) {
				node.removeAttribute( 'tabindex' );
			}

			if ( node.hasAttribute( 'contenteditable' ) ) {
				node.setAttribute( 'contenteditable', 'false' );
			}
		} );
	}, { leading: true } )

	/**
	 * Renders the component.
	 *
	 * @return {Objec}
	 */
	render() {
		const { className, children } = this.props;

		return (
			<Provider value={ true }>
				<div ref={ this.node } className={ className }>
					{ children }
				</div>
			</Provider>
		);
	}
}

Disabled.Consumer = Consumer;

export default Disabled;
