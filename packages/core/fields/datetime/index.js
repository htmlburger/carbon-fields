/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class DatetimeField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			value,
			onChange,
			children
		} = this.props;

		return children( {
			field,
			value,
			handleChange: onChange
		} );
	}
}

export default DatetimeField;
