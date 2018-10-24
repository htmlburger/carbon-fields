/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class TextField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children( {
			handleChange: this.props.onChange
		} );
	}
}

export default TextField;
