/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class TextField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {string} fieldId
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( fieldId, value ) => {
		this.props.onChange( {
			[ fieldId ]: value
		} );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children( {
			handleChange: this.handleChange
		} );
	}
}

export default TextField;
