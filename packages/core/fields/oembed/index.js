/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { withEffects, toProps } from 'refract-callbag';
import { compose, withState } from '@wordpress/compose';
import {
	map,
	pipe,
	merge
} from 'callbag-basics';
import of from 'callbag-of';
import {
	isEmpty,
	debounce
} from 'lodash';

class OembedField extends Component {
	handleSearchSubmit = debounce( ( value ) => {
		const {
			isLoading,
			setState,
			onFetchEmbedCode
		} = this.props;

		if ( isLoading ) {
			return;
		}

		setState( {
			embedCode: '',
			error: ''
		} );

		if ( isEmpty( value ) ) {
			return;
		}

		setState( {
			isLoading: true
		} );

		onFetchEmbedCode( value );
	}, 200 )

	componentDidMount() {
		const {
			value
		} = this.props;

		// eslint-disable-next-line
		const domNode = ReactDOM.findDOMNode( this );

		const i = setInterval( () => {
			if ( domNode.getBoundingClientRect().width > 0 ) {
				clearInterval( i );

				this.handleSearchSubmit( value );
			}
		}, 100 );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			children,
			onChange,
			embedCode,
			embedType,
			provider
		} = this.props;

		return children( {
			field,
			name,
			value,
			handleChange: onChange,
			handleSearchSubmit: this.handleSearchSubmit,
			embedCode,
			embedType,
			provider
		} );
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @return {Function}
 */
function aperture() {
	return function( component ) {
		const [ fetchEmbedCode$, fetchEmbedCode ] = component.useEvent( 'fetchEmbedCode' );

		const fetchEmbedCodeProps$ = pipe(
			of( {
				onFetchEmbedCode: fetchEmbedCode
			} ),
			map( toProps )
		);

		const fetchEmbedCodeEffect$ = pipe(
			fetchEmbedCode$,
			map( ( payload ) => ( {
				type: 'FETCH_EMBED_CODE',
				payload: payload
			} ) )
		);

		return merge( fetchEmbedCodeProps$, fetchEmbedCodeEffect$ );
	};
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler( props ) {
	return function( effect ) {
		const { payload, type } = effect;

		switch ( type ) {
			case 'FETCH_EMBED_CODE':
				// eslint-disable-next-line
				let request = $.get( window.wpApiSettings.root + 'oembed/1.0/proxy', {
					url: payload,
					_wpnonce: window.wpApiSettings.nonce
				} );

				/* eslint-disable-next-line no-alert */
				const errorHandler = () => alert( 'An error occurred while trying to fetch association options.' );

				request.done( ( response ) => {
					props.setState( {
						embedCode: response.html,
						embedType: response.type,
						provider: response.provider_name,
						isLoading: false
					} );
				} );

				request.fail( () => {
					errorHandler();

					props.setState( {
						error: carbonFieldsL10n.field.oembedNotFound,
						isLoading: false
					} );
				} );

				break;
		}
	};
}

const applyWithState = withState( {
	embedCode: '',
	embedType: '',
	provider: '',
	error: '',
	isLoading: false
} );

const applyWithEffects = withEffects( handler )( aperture );

export default compose(
	applyWithState,
	applyWithEffects
)( OembedField );
