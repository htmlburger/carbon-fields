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
		const { field, id, onChange } = this.props;

		onChange( id, ! field.value );
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
