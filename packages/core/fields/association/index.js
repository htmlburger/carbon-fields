/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { compose, withState } from '@wordpress/compose';
import { withEffects, toProps } from 'refract-callbag';
import {
	cloneDeep,
	debounce,
	find,
	isMatch,
	without
} from 'lodash';
import {
	map,
	pipe,
	merge
} from 'callbag-basics';
import of from 'callbag-of';

class AssociationField extends Component {
	/**
	 * Handles the change of the field.
	 *
	 * @param  {Array} value
	 * @return {void}
	 */
	handleChange = ( value ) => {
		const { field } = this.props;

		this.props.onChange(
			field.base_name,
			value
		);
	}

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

	/**
	 * Handles addition of a new item.
	 *
	 * @param  {Array} option
	 * @return {void}
	 */
	handleAddItem = ( option ) => {
		const { field, value } = this.props;

		// Don't do anything if the duplicates aren't allowed and
		// the item is already selected.
		if ( ! field.duplicates_allowed && option.disabled ) {
			return;
		}

		// Don't do anything, because the maximum is reached.
		if ( field.max > 0 && value.length >= field.max ) {
			// alert( carbonFieldsL10n.field.maxNumItemsReached.replace( '%s', field.max ) );
			return;
		}

		this.handleChange( [
			...value,
			cloneDeep( option )
		] );
	}

	/**
	 * Handles addition of a new item.
	 *
	 * @param  {Array} option
	 * @return {void}
	 */
	handleRemoveItem = ( option ) => {
		const { value } = this.props;

		this.handleChange( without( value, option ) );
	}

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
			value,
			totalOptionsCount
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
			value: value,
			options: options,
			sortableOptions: sortableOptions,
			totalOptionsCount: totalOptionsCount,
			handleChange: this.handleChange,
			handleAddItem: this.handleAddItem,
			handleRemoveItem: this.handleRemoveItem,
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
