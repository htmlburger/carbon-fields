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
		if ( ! this.props.children ) {
			return null;
		}

		return this.props.children( {
			field: this.props.field
		} );
	}
}

export default HiddenField;
