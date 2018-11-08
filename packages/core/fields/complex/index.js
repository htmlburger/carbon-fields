/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class ComplexField extends Component {
	/**
	 * Returns the text used in "Add Entry" button.
	 *
	 * TODO: Switch to @wordpress/i18n
	 * @return {string}
	 */
	get inserterButtonText() {
		const { field } = this.props;

		return window.carbonFieldsL10n.field.complexAddButton.replace( '%s', field.labels.singular_name );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { inserterButtonText } = this;

		const {
			field,
			name,
			value,
			children,
			onChange
		} = this.props;

		return children( {
			field,
			name,
			value,
			inserterButtonText,
			handleChange: onChange
		} );
	}
}

export default ComplexField;
