/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { xor } from 'lodash';

class MultiselectField extends Component {
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
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, value } = this.props;

		return this.props.children( {
			field,
			value,
			handleChange: this.handleChange
		} );
	}
}

export default MultiselectField;
