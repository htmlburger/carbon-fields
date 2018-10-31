/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class SeparatorField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, children } = this.props;

		return children( { field } );
	}
}

export default SeparatorField;
