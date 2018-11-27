/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class HiddenField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			name,
			value,
			field
		} = this.props;

		return (
			<input
				type="hidden"
				name={ name }
				value={ value }
				className="hidden-text"
				{ ...field.attributes }
			/>
		);
	}
}

export default HiddenField;
