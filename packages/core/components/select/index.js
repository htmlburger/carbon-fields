/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class SelectField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children();
	}
}

export default SelectField;
