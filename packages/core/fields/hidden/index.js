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
		const {
			field,
			name,
			value,
			children
		} = this.props;

		return children( {
			field,
			name,
			value
		} );
	}
}

export default HiddenField;
