/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';
import FieldBase from '../../components/field-base';
import validator from '../../validators/required';

class CheckboxField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @return {void}
	 */
	handleChange = () => {
		const {
			id,
			field,
			value,
			onChange
		} = this.props;

		onChange(
			id,
			value === field.option_value
				? ''
				: field.option_value
		);
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
			error,
			field
		} = this.props;

		return (
			<FieldBase field={ field } error={ error }>
				<input
					type="checkbox"
					id={ id }
					name={ name }
					checked={ value }
					value={ field.option_value }
					className="cf-checkbox__input"
					onChange={ this.handleChange }
					{ ...field.attributes }
				/>

				<label className="cf-checkbox__label" htmlFor={ id }>
					{ field.option_label }
				</label>
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.checkbox.validate', 'carbon-fields/core', ( field, value ) => validator( value ) );

export default CheckboxField;
