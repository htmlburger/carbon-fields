/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

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
		const {
			field,
			name,
			value
		} = this.props;

		return (
			<FieldBase field={ field } >
				<label>
					<input
						type="checkbox"
						id={ field.id }
						name={ name }
						checked={ value }
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

addFilter( 'carbon-fields.checkbox-field.metabox', 'carbon-fields/metaboxes', ( OriginalCheckboxField ) => withField( ( props ) => {
	return (
		<OriginalCheckboxField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => (
				<CheckboxField
					field={ field }
					name={ name }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalCheckboxField>
	);
} ) );
