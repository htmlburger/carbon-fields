/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { xor } from 'lodash';

class SetField extends Component {
	/**
	 * Handles the change of the field.
	 *
	 * @param  {string} fieldKey
	 * @param  {mixed}  value
	 * @return {void}
	 */
	handleChange = ( fieldKey, value ) => {
		this.props.onChange(
			fieldKey,
			xor( this.props.value, [ value ] )
		);
	}

	/**
	 * Checks if the given option is checked.
	 *
	 * @param  {Object} option
	 * @return {boolean}
	 */
	isChecked = ( option ) => {
		return this.props.value.indexOf( option.value ) > -1;
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, value } = this.props;

		return this.props.children( {
			field,
			value,
			isChecked: this.isChecked,
			handleChange: this.handleChange
		} );
	}
}

export default SetField;
