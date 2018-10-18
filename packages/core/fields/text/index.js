/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class TextField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {string} fieldKey The name(Gutenberg) or the identifier(Classic Editor) of field.
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( fieldKey, value ) => {
		this.props.onChange( {
			[ fieldKey ]: value
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
