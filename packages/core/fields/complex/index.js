/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class Complex extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {string} fieldKey The name(Gutenberg) or the identifier(Classic Editor) of field.
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = () => {
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children( {
			handleChange: this.handleChange,
			hasGroups: this.hasGroups
		} );
	}
}

export default Complex;
