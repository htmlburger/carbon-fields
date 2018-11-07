/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class ComplexField extends Component {
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

export default ComplexField;
