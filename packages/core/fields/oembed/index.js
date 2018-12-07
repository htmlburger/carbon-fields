/**
 * External dependencies.
 */
import { Component, createRef } from '@wordpress/element';
import { compose, withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { withEffects, toProps } from 'refract-callbag';
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

/**
 * The internal dependencies.
 */
import './style.scss';
import SearchInput from '../../components/search-input';
import OembedPreview from './preview';

class OembedField extends Component {
	/**
	 * Keeps references to the DOM node.
	 *
	 * @type {Object}
	 */
	node = createRef();

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const { value } = this.props;

		const i = setInterval( () => {
			if ( this.node.current.getBoundingClientRect().width > 0 ) {
				clearInterval( i );

				this.handleSearch( value );
			}
		}, 100 );
	}

	/**
	 * Handles the load of the oembed preview.
	 *
	 * @param  {String} value
	 * @return {void}
	 */
	handleSearch = debounce( ( value ) => {
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

	/**
	 * Handles the change of the input.
	 *
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( value ) => {
		const { id, onChange } = this.props;

		onChange( id, value );

		this.handleSearch( value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			name,
			value,
			embedCode,
			embedType,
			provider
		} = this.props;

		return (
			<div ref={ this.node }>
				<SearchInput
					id={ id }
					value={ value }
					onChange={ this.handleChange }
				/>

				{
					embedCode
						? <OembedPreview
							html={ embedCode }
							type={ embedType }
							provider={ provider }
						/>
						: null
				}

				<input
					type="hidden"
					name={ name }
					value={ value }
					readOnly
				/>
			</div>
		);
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @param  {Object} component
 * @return {Object}
 */
function aperture( component ) {
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
				const errorHandler = () => alert( __( 'An error occurred while trying to fetch oembed preview.', 'carbon-fields-ui' ) );

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
						error: __( 'Not Found', 'carbon-fields-ui' ),
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

const applyWithEffects = withEffects( aperture, { handler } );

export default compose(
	applyWithState,
	applyWithEffects
)( OembedField );
