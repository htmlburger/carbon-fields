/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class HiddenField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children();
	}
}

export default HiddenField;
