/**
 * External dependencies.
 */
import produce from 'immer';
import { __, sprintf } from '@wordpress/i18n';
import {
	Component,
	Fragment,
	createRef
} from '@wordpress/element';
import { compose, withState } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { withEffects, toProps } from 'refract-callbag';
import cx from 'classnames';
import {
	find,
	pick,
	without,
	isMatch,
	isEmpty

} from 'lodash';
import {
	combine,
	map,
	merge,
	pipe
} from 'callbag-basics';
import of from 'callbag-of';

/**
 * Internal dependencies.
 */
import './style.scss';
import SearchInput from '../../components/search-input';
import Sortable from '../../components/sortable';
import apiFetch from '../../utils/api-fetch';

class AssociationField extends Component {
	/**
	 * Keeps reference to the DOM node that contains the selected items.
	 *
	 * @type {Object}
	 */
	selectedList = createRef();

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const {
			fetchSelectedOptions,
			field,
			value,
			setState
		} = this.props;

		setState( {
			options: field.options.options,
			totalOptionsCount: field.options.total_options
		} );

		if ( value ) {
			fetchSelectedOptions();
		}
	}

	/**
	 * Handles the change of search.
	 *
	 * @param  {string} queryTerm
	 * @return {void}
	 */
	handleSearchChange = ( queryTerm ) => {
		const {
			fetchOptions,
			setState
		} = this.props;

		setState( { queryTerm } );
		fetchOptions( { queryTerm } );
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
			onChange,
			setState,
			selectedOptions
		} = this.props;

		// Don't do anything if the duplicates aren't allowed and
		// the item is already selected.
		if ( ! field.duplicates_allowed && option.disabled ) {
			return;
		}

		// Don't do anything, because the maximum is reached.
		if ( field.max > 0 && value.length >= field.max ) {
			// eslint-disable-next-line no-alert
			alert(
				sprintf(
					__( 'Maximum number of items reached (%s items)', 'carbon-fields-ui' ),
					Number( field.max )
				)
			);
			return;
		}

		onChange( id, [
			...value,
			pick( option, 'id', 'type', 'subtype' )
		] );

		setState( {
			selectedOptions: [ ...selectedOptions, option ]
		} );
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
			onChange,
			setState,
			selectedOptions
		} = this.props;

		onChange( id, without( value, option ) );
		setState( {
			selectedOptions: without( selectedOptions, option )
		} );
	}

	/**
	 * Handles sorting of selected options.
	 *
	 * @param  {Object[]} items
	 * @return {void}
	 */
	handleSort = ( items ) => {
		const { id, onChange } = this.props;

		onChange( id, items );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			name,
			value,
			field,
			totalOptionsCount,
			selectedOptions,
			queryTerm
		} = this.props;

		let { options } = this.props;

		if ( ! field.duplicates_allowed ) {
			options = produce( options, ( draft ) => {
				draft.map( ( option ) => {
					option.disabled = !! find( value, ( selectedOption ) => isMatch( selectedOption, {
						id: option.id,
						type: option.type,
						subtype: option.subtype
					} ) );

					return option;
				} );
			} );
		}

		return (
			<Fragment>
				<div className="cf-association__bar">
					<SearchInput
						value={ queryTerm }
						onChange={ this.handleSearchChange }
					/>

					<span className="cf-association__counter">
						{ sprintf(
							__( 'Showing %1$d of %2$d results', 'carbon-fields-ui' ),
							Number( options.length ),
							Number( totalOptionsCount )
						) }
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
											<a className="cf-association__option-action cf-association__option-action--edit dashicons dashicons-edit" href={ option.edit_link }></a>

											{ (
												! option.disabled
												&& ( field.max < 0 || value.length < field.max )
											) && (
												<button type="button" className="cf-association__option-action dashicons dashicons-plus-alt" onClick={ () => this.handleAddItem( option ) }>
												</button>
											) }
										</div>
									</div>
								);
							} )
						}
					</div>

					<Sortable
						forwardedRef={ this.selectedList }
						items={ value }
						options={ {
							axis: 'y',
							forceHelperSize: true,
							forcePlaceholderSize: true,
							scroll: true,
							handle: '.cf-association__option-sort'
						} }
						onUpdate={ this.handleSort }
					>
						<div className="cf-association__col" ref={ this.selectedList }>
							{
								!! selectedOptions.length && value.map( ( option, index ) => {
									const optionData = selectedOptions.find( ( selectedOption ) => {
										return selectedOption.id === option.id
											&& selectedOption.type === option.type
											&& selectedOption.subtype === option.subtype;
									} );

									return (
										<div className="cf-association__option" key={ index }>
											<span className="cf-association__option-sort dashicons dashicons-menu"></span>

											{ optionData.thumbnail && (
												<img className="cf-association__option-thumb" src={ optionData.thumbnail } />
											) }

											<div className="cf-association__option-content">
												<span className="cf-association__option-title">
													{ optionData.title }
												</span>

												<span className="cf-association__option-type">
													{ optionData.type }
												</span>
											</div>

											<div className="cf-association__option-actions">
												<button type="button" className="cf-association__option-action dashicons dashicons-dismiss" onClick={ () => this.handleRemoveItem( option ) }></button>
											</div>

											<input
												type="hidden"
												name={ `${ name }[${ index }]` }
												value={ `${ optionData.type }:${ optionData.subtype }:${ optionData.id }` }
												readOnly
											/>
										</div>
									);
								} )
							}
						</div>
					</Sortable>
				</div>
			</Fragment>
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
	const actions = [
		{ event: 'fetchOptionsEvent', prop: 'fetchOptions', type: 'FETCH_OPTIONS' },
		{ event: 'fetchSelectedOptionsEvent', prop: 'fetchSelectedOptions', type: 'FETCH_SELECTED_OPTIONS' }
	].map( ( actionData ) => {
		const [ actionChannel$, action ] = component.useEvent( actionData.event );

		return {
			...actionData,
			action,
			channel$: actionChannel$
		};
	} );

	const combined$ = pipe(
		combine( ...actions.map( ( { action, prop } ) => of( {
			action,
			prop
		} ) ) ),
		map( ( combinedActions ) => toProps( combinedActions.reduce(
			( acc, curr ) => ( {
				...acc,
				[ curr.prop ]: curr.action
			} ), {}
		) ) )
	);

	return merge(
		combined$,
		...actions.map( ( { channel$, type } ) => pipe(
			channel$,
			map( ( payload ) => ( {
				type,
				payload
			} ) )
		) )
	);
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
		const {
			setState,
			selectedOptions,
			hierarchyResolver
		} = props;

		switch ( type ) {
			case 'FETCH_OPTIONS':
				// eslint-disable-next-line
				const request = window.jQuery.get( window.ajaxurl, {
					action: 'carbon_fields_fetch_association_options',
					term: payload.queryTerm,
					container_id: props.containerId,
					field_name: hierarchyResolver()
				}, null, 'json' );

				/* eslint-disable-next-line no-alert */
				const errorHandler = () => alert( __( 'An error occurred while trying to fetch association options.', 'carbon-fields-ui' ) );

				request.done( ( response ) => {
					if ( response && response.success ) {
						setState( {
							options: response.data.options,
							totalOptionsCount: response.data.total_options
						} );
					} else {
						errorHandler();
					}
				} );

				request.fail( errorHandler );
				break;

			case 'FETCH_SELECTED_OPTIONS':
				apiFetch(
					`${ window.wpApiSettings.root }carbon-fields/v1/association/`,
					'get',
					{
						container_id: props.containerId,
						options: props.value,
						field_id: hierarchyResolver()
					}
				)
					.then( ( response ) => {
						setState( {
							selectedOptions: [ ...selectedOptions, ...response ]
						} );
					} );

				break;
		}
	};
}

const applyWithState = withState( {
	options: [],
	selectedOptions: [],
	totalOptionsCount: 0,
	queryTerm: ''
} );

const applyWithEffects = withEffects( aperture, { handler } );

addFilter( 'carbon-fields.association.validate', 'carbon-fields/core', ( field, value ) => {
	const { min, required } = field;

	if ( required && isEmpty( value ) ) {
		return __( 'This field is required.', 'carbon-fields-ui' );
	}

	if ( min > 0 && value.length < min ) {
		return sprintf( __( 'Minimum number of items not reached (%s items)', 'carbon-fields-ui' ), [ field.min ] );
	}

	return null;
} );

export default compose(
	applyWithState,
	applyWithEffects
)( AssociationField );
