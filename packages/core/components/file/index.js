/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class FileField extends Component {
	handleSelect = ( media ) => {
		const { onChange, field } = this.props;

		// TODO Add value type limitations
		onChange( { [ field.base_name ]: media[ field.value_type ] } );
	}
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field: { type }, children } = this.props;

		const buttonLabel = carbonFieldsL10n.field[
			type === 'image' ? 'imageButtonLabel' : 'fileButtonLabel'
		];

		return children( {
			buttonLabel,
			handleSelect: this.handleSelect
		} );
	}
}

export default FileField;
