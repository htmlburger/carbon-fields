/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import FieldBase from '../../components/field-base';

class TextField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { id, onChange } = this.props;

		onChange( id, e.target.value );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			name,
			value,
			field
		} = this.props;

		return (
			<FieldBase id={ id } field={ field }>
				<input
					type="text"
					id={ id }
					name={ name }
					value={ value }
					onChange={ this.handleChange }
					{ ...field.attributes }
				/>
			</FieldBase>
		);
	}
}

export default TextField;
