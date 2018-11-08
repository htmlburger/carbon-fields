/**
 * External dependencies.
 */
import cx from 'classnames';
import {
	cloneDeep,
	without
} from 'lodash';

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

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
			field.id,
			value
		);
	}

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

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			options,
			totalOptionsCount,
			value
		} = this.props;

		return (
			<FieldBase field={ field } className="cf-field-association-wrapper">
				<strong className="cf-field-association__counter">
					showing { options.length } of { totalOptionsCount } results
				</strong>

				<div className="cf-field-association">
					<div className="cf-field-association__body">
						<div className="cf-field-association__search-bar">
							<input type="text" value={ field.queryTerm } placeholder={ carbonFieldsL10n.field.searchPlaceholder } />
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
												<a
													href={ option.edit_link }
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Edit"
												>
													Edit
												</a>

												<button
													type="button"
													aria-label="Add"
													onClick={ () => this.handleAddItem( option ) }
												>
													Add
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
												+
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
												<button
													type="button"
													aria-label="Remove"
													onClick={ () => this.handleRemoveItem( option ) }
												>
													Remove
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

addFilter( 'carbon-fields.association-field.metabox', 'carbon-fields/metaboxes', ( OriginalAssociationField ) => withField( ( props ) => {
	return (
		<OriginalAssociationField { ...props }>
			{ ( {
				field,
				name,
				value,
				options,
				totalOptionsCount,
				handleChange,
				handleQueryTermChange
			} ) => (
				<AssociationField
					field={ field }
					name={ name }
					value={ value }
					options={ options }
					totalOptionsCount={ totalOptionsCount }
					onChange={ handleChange }
					onQueryTermChange={ handleQueryTermChange }
				/>
			) }
		</OriginalAssociationField>
	);
} ) );
