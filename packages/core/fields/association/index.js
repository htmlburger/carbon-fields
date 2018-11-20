/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { compose, withState } from '@wordpress/compose';
import { withEffects, toProps } from 'refract-callbag';
import cx from 'classnames';
import {
	cloneDeep,
	find,
	isMatch,
	without
} from 'lodash';
import {
	map,
	merge,
	pipe
} from 'callbag-basics';
import of from 'callbag-of';

/**
 * Internal dependencies.
 */
import './style.scss';
import FieldBase from '../../components/field-base';
import SearchInput from '../../components/search-input';

class AssociationField extends Component {
	/**
	 * Handles the change of search.
	 *
	 * @param  {string} queryTerm
	 * @return {void}
	 */
	handleSearchChange = ( queryTerm ) => {
		this.props.setState( {
			queryTerm
		} );

		this.props.onFetchOptions( {
			queryTerm
		} );
	}

	/**
	 * Handles addition of a new item.
	 *
	 * @param  {Array} option
	 * @return {void}
	 */
	handleAddItem = ( option ) => {
		const {
			field,
			id,
			value,
			onChange
		} = this.props;

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

		onChange( id, [
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
		const {
			value,
			id,
			onChange
		} = this.props;

		onChange( id, without( value, option ) );
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
			id,
			field,
			name,
			value,
			totalOptionsCount,
			queryTerm
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

		// eslint-disable-next-line
		const sortableOptions = {
			axis: 'y',
			items: 'li',
			forceHelperSize: true,
			forcePlaceholderSize: true,
			scroll: true,
			handle: '.mobile-handle'
		};

		return (
			<FieldBase id={ id } field={ field }>
				<div className="cf-association__bar">
					<SearchInput
						value={ queryTerm }
						onChange={ this.handleSearchChange }
					/>

					<span className="cf-association__counter">
						Showing { options.length } of { totalOptionsCount } results
					</span>
				</div>

				<div className="cf-association__cols">
					<div className="cf-association__col">
						{
							options.map( ( option, index ) => {
								return (
									<div className={ cx( 'cf-association__option', { 'cf-association__option--selected': option.disabled } ) } key={ index }>
										{ option.thumbnail && (
											<img className="cf-association__option-thumb" src={ option.thumbnail } />
										) }

										<div className="cf-association__option-content">
											<span className="cf-association__option-title">
												{ option.title }
											</span>

											<span className="cf-association__option-type">
												{ option.type }
											</span>
										</div>

										<div className="cf-association__option-actions">
											<a className="cf-association__option-action dashicons dashicons-edit" href={ option.edit_link }></a>

											{ ! option.disabled && (
												<button type="button" className="cf-association__option-action dashicons dashicons-plus-alt" onClick={ () => this.handleAddItem( option ) }>
												</button>
											) }
										</div>
									</div>
								);
							} )
						}
					</div>

					<div className="cf-association__col">
						{
							value.map( ( option, index ) => {
								return (
									<div className="cf-association__option" key={ index }>
										<span className="cf-association__option-sort dashicons dashicons-menu"></span>

										{ option.thumbnail && (
											<img className="cf-association__option-thumb" src={ option.thumbnail } />
										) }

										<div className="cf-association__option-content">
											<span className="cf-association__option-title">
												{ option.title }
											</span>

											<span className="cf-association__option-type">
												{ option.type }
											</span>
										</div>

										<div className="cf-association__option-actions">
											<button type="button" className="cf-association__option-action dashicons dashicons-dismiss" onClick={ () => this.handleRemoveItem( option ) }></button>
										</div>

										<input
											type="hidden"
											name={ `${ name }[${ index }]` }
											value={ `${ option.type }:${ option.subtype }:${ option.id }` }
											readOnly
										/>
									</div>
								);
							} )
						}
					</div>
				</div>
			</FieldBase>
		);
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
