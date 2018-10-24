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
		const {
			field,
			value,
			onChange
		} = this.props;

		return this.props.children( {
			field,
			value,
			handleChange: onChange
		} );
	}
}

export default SelectField;
