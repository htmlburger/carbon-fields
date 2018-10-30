/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withStore from '../../components/with-store';

class SidebarField extends Component {
	/**
	 * Handles the change of the new sidebar name input field
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleNewSidebarInput = ( e ) => this.props.onNewSidebarNameChagne( e.target.value )

	/**
	 * Handles the change of the select field.
	 *
	 * @param {Object} e
	 * @return {void}
	 */
	handleChange = ( e = {} ) => {
		const { field, onChange } = this.props;

		onChange(
			field.id,
			e.target
				? e.target.value
				: null
		);
	}

	/**
	 * Rendes the component
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			canAddNew,
			newSidebarName
		} = this.props;

		return (
			<FieldBase field={ field } >
				<select
					disabled={ canAddNew() }
					name={ field.base_name }
					id={ field.id }
					value={ field.value }
					onChange={ this.handleChange }
				>
					{ field.options.map( ( { value, label } ) => (
						<option key={ value } value={ value }>{ label }</option>
					) ) }
				</select>

				{ canAddNew() && (
					<div className="carbon--sidebar--new">
						<input
							type="text"
							value={ newSidebarName }
							onChange={ this.handleNewSidebarInput }
						/>

						<button type="button" className="is-button is-default" onClick={ this.handleChange }>
							{ __( 'Cancel' ) }
						</button>

						<button type="button" className="is-button is-primary" onClick={ () => {} }>
							{ __( 'Add New' ) }
						</button>
					</div>
				) }
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.sidebar-field.metabox', 'carbon-fields/metaboxes', ( OriginalSelectField ) => compose(
	withStore
)( ( props ) => {
	return (
		<OriginalSelectField { ...props }>
			{ ( {
				field,
				handleChange,
				canAddNew,
				handleNewSidebarNameChange,
				newSidebarName
			} ) => (
				<SidebarField
					field={ field }
					onChange={ handleChange }
					onNewSidebarNameChagne={ handleNewSidebarNameChange }
					canAddNew={ canAddNew }
					newSidebarName={ newSidebarName }
				/>
			) }
		</OriginalSelectField>
	);
} ) );
