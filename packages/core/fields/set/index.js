/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { xor } from 'lodash';

class SetField extends Component {
	/**
	 * Handles the change of the field.
	 *
	 * @param  {string}        fieldKey
	 * @param  {Array}         values
	 * @param  {string|number} optionValue
	 * @return {void}
	 */
	handleChange = ( fieldKey, values, optionValue ) => {
		this.props.onChange(
			fieldKey,
			xor( values, [ optionValue ] )
		);
	}

	/**
	 * Checks if the given option is checked.
	 *
	 * @param  {Array} values
	 * @param  {Object} option
	 * @return {boolean}
	 */
	isChecked = ( values, option ) => {
		return values.indexOf( option.value ) > -1;
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
			children
		} = this.props;

		return children( {
			field,
			name,
			value,
			isChecked: this.isChecked,
			handleChange: this.handleChange
		} );
	}
}

export default SetField;
