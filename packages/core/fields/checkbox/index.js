/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import FieldBase from '../../components/field-base';

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
			field,
			name,
			value
		} = this.props;

		return (
			<FieldBase field={ field }>
				<label className="cf-metaboxes-checkbox__inner">
					<input
						type="checkbox"
						id={ id }
						name={ name }
						checked={ value }
						value={ field.option_value }
						onChange={ this.handleChange }
						{ ...field.attributes }
					/>

					{ field.option_label }
				</label>
			</FieldBase>
		);
	}
}

export default CheckboxField;
