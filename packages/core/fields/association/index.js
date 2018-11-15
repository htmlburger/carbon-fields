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
import FieldBase from '../../components/field-base';

class AssociationField extends Component {
	handleQueryTermChange = ( queryTerm ) => {
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
			<FieldBase
				field={ field }
				className="cf-field-association-wrapper"
			>
				<strong className="cf-field-association__counter">
					showing { options.length } of { totalOptionsCount } results
				</strong>

				<div className="cf-field-association">
					<div className="cf-field-association__body">
						<div className="cf-field-association__search-bar">
							<input
								type="text"
								value={ queryTerm }
								placeholder={ carbonFieldsL10n.field.searchPlaceholder }
								onChange={ ( event ) => this.handleQueryTermChange( event.target.value ) }
							/>
						</div>

						<div className="cf-field-association__col cf-field-association__col--source">
							{
								options.map( ( option, index ) => {
									return (
										<div className={ cx( 'cf-field-association__option', { 'cf-field-association__option--selected': option.disabled } ) } key={ index }>
											<img className="cf-field-association__option-thumbnail" src={ option.thumbnail ? option.thumbnail : '' } />

											<div className="cf-field-association__option-content">
												<span className="cf-field-association__option-title">
													{ option.title }
												</span>

												<span className="cf-field-association__option-type">
													{ option.type }
												</span>
											</div>

											<div className="cf-field-association__option-actions">
												<a href={ option.edit_link }>
													<span className="dashicons dashicons-edit"></span> Edit
												</a>

												<button type="button" className="is-small" onClick={ () => this.handleAddItem( option ) }>
													<span className="dashicons dashicons-plus"></span> Add
												</button>
											</div>
										</div>
									);
								} )
							}
						</div>

						<div className="cf-field-association__col cf-field-association__col--selected">
							{
								value.map( ( option, index ) => {
									return (
										<div className="cf-field-association__option" key={ index }>
											<div className="cf-field-association__option-sort">
												<span className="dashicons dashicons-menu"></span>
											</div>

											<img className="cf-field-association__option-thumbnail" src={ option.thumbnail ? option.thumbnail : '' } />

											<div className="cf-field-association__option-content">
												<span className="cf-field-association__option-title">
													{ option.title }
												</span>

												<span className="cf-field-association__option-type">
													{ option.type }
												</span>
											</div>

											<div className="cf-field-association__option-actions">
												<button type="button" onClick={ () => this.handleRemoveItem( option ) }>
													<span className="dashicons dashicons-trash"></span> Remove
												</button>
											</div>

											<input
												type="hidden"
												name={ `${ name }[${ index }]` }
												value={ `${ option.type }:${ option.subtype }:${ option.id }` }
												readOnly={ true }
											/>
										</div>
									);
								} )
							}
						</div>
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
