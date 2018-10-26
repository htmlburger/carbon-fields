/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withStore from '../../components/with-store';

class CheckboxField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @return {void}
	 */
	handleChange = () => {
		const { field, onChange } = this.props;

		onChange( field.id, ! field.value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field } = this.props;

		return (
			<FieldBase field={ field } >
				<label>
					<input
						type="checkbox"
						id={ field.id }
						name={ field.base_name }
						checked={ field.value }
						onChange={ this.handleChange }
						{ ...field.attributes }
					/>

					{ field.option_label }

					{ field.required && <span className="carbon-required">*</span> }
				</label>
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.checkbox-field.metabox', 'carbon-fields/metaboxes', ( OriginalCheckboxField ) => withStore( ( props ) => {
	return (
		<OriginalCheckboxField { ...props }>
			{ ( { field, handleChange } ) => (
				<CheckboxField
					field={ field }
					onChange={ handleChange }
				/>
			) }
		</OriginalCheckboxField>
	);
} ) );
