/**
 * External dependencies.
 */
import { withEffects, toProps } from 'refract-callbag';
import {
	debounce,
	find,
	isMatch
} from 'lodash';
import {
	map,
	pipe,
	merge
} from 'callbag-basics';
import of from 'callbag-of';

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { compose, withState } from '@wordpress/compose';

class AssociationField extends Component {
	handleQueryTermChange = debounce( ( queryTerm ) => {
		const {
			onFetchOptions,
			setState
		} = this.props;

		setState( {
			queryTerm: queryTerm
		} );

		onFetchOptions( {
			queryTerm: queryTerm
		} );
	}, 300 );

	componentDidMount() {
		const {
			field,
			setState
		} = this.props;

		setState( {
			options: field.options.options,
			totalOptionsCount: field.options.total_options
		} );
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
			totalOptionsCount,
			onChange
		} = this.props;

		let { options } = this.props;

		if ( ! field.duplicates_allowed ) {
			options = options.map( ( option ) => {
				option.disabled = !! find( value, ( selectedOption ) => isMatch( selectedOption, {
					id: option.id,
					type: option.type,
					subtype: option.subtype
				} ) );

				return option;
			} );
		}

		const sortableOptions = {
			axis: 'y',
			items: 'li',
			forceHelperSize: true,
			forcePlaceholderSize: true,
			scroll: true,
			handle: '.mobile-handle'
		};

		return this.props.children( {
			field: field,
			name: name,
			value: value,
			options: options,
			sortableOptions: sortableOptions,
			totalOptionsCount: totalOptionsCount,
			handleChange: onChange,
			handleQueryTermChange: this.handleQueryTermChange
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
		const [ fetchOptions$, fetchOptions ] = component.useEvent( 'fetchOptions' );

		const fetchOptionsProps$ = pipe(
			of( {
				onFetchOptions: fetchOptions
			} ),
			map( toProps )
		);

		const fetchOptionsEffect$ = pipe(
			fetchOptions$,
			map( ( payload ) => ( {
				type: 'FETCH_OPTIONS',
				payload: payload
			} ) )
		);

		return merge( fetchOptionsProps$, fetchOptionsEffect$ );
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
		const { field } = props;

		switch ( type ) {
			case 'FETCH_OPTIONS':
				// eslint-disable-next-line
				const request = window.jQuery.get( window.ajaxurl, {
					action: 'carbon_fields_fetch_association_options',
					term: payload.queryTerm,
					container_id: field.container_id,
					field_name: field.base_name
				}, null, 'json' );

				/* eslint-disable-next-line no-alert */
				const errorHandler = () => alert( 'An error occurred while trying to fetch association options.' );

				request.done( ( response ) => {
					if ( response && response.success ) {
						props.setState( {
							options: response.data.options,
							totalOptionsCount: response.data.total_options
						} );
					} else {
						errorHandler();
					}
				} );

				request.fail( errorHandler );
				break;
		}
	};
}

const applyWithState = withState( {
	options: [],
	totalOptionsCount: 0,
	queryTerm: ''
} );

const applyWithEffects = withEffects( handler )( aperture );

export default compose(
	applyWithState,
	applyWithEffects
)( AssociationField );
