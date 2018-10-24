/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class HtmlField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children( {
			field: this.props.field
		} );
	}
}

export default HtmlField;
