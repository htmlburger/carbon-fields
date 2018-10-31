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
	 * Filter the field options which are contained as values
	 *
	 * @param {Array} values
	 * @return {Array}
	 */
	filterValues = ( values ) => {
		const { field } = this.props;

		return field.options.filter( ( option ) => values.indexOf( option.value ) > -1 );
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
			handleChange: this.handleChange,
			filterValues: this.filterValues
		} );
	}
}

export default MultiselectField;
