/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { cloneDeep, without } from 'lodash';

class AssociationField extends Component {
	/**
	 * Handles the change of the field.
	 *
	 * @param  {Array} value
	 * @return {void}
	 */
	handleChange = ( value ) => {
		const { field } = this.props;

		this.props.onChange(
			field.base_name,
			value
		);
	}

	/**
	 * Handles addition of a new item.
	 *
	 * @param  {Array} option
	 * @return {void}
	 */
	handleAddItem = ( option ) => {
		const { value } = this.props;

		this.handleChange( [
			...value,
			cloneDeep( option )
		] );
	}

	/**
	 * Handles addition of a new item.
	 *
	 * @param  {Array} option
	 * @return {void}
	 */
	handleRemoveItem = ( option ) => {
		const { value } = this.props;

		this.handleChange( without( value, option ) );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			value
		} = this.props;

		return this.props.children( {
			field: field,
			value: value,
			handleChange: this.handleChange,
			handleAddItem: this.handleAddItem,
			handleRemoveItem: this.handleRemoveItem
		} );
	}
}

export default AssociationField;
