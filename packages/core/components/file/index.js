/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { Placeholder } from '@wordpress/components';

class FileField extends Component {
	/**
	 * Handles the file selection
	 * @param  {Object} media
	 * @return {Null}
	 */
	handleSelect = ( media ) => {
		const { onChange, field } = this.props;

		// TODO Add value type limitations
		onChange( { [ field.base_name ]: media } );
	}

	/**
	 * Provide the file component
	 *
	 * @return {Null}
	 */
	renderFileComponent = () => {
		const { value } = this.props;

		if ( ! value ) {
			return null;
		}

		if ( /image/.test( value.mime ) ) {
			return (
				<img src={ value.url } />
			);
		}

		return (
			<Placeholder
				icon="media-document"
				label={ value.filename }
			/>
		);
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { buttonLabelProp, children } = this.props;

		const buttonLabel = carbonFieldsL10n.field[ buttonLabelProp ];

		return children( {
			buttonLabel,
			handleSelect: this.handleSelect,
			renderFileComponent: this.renderFileComponent
		} );
	}
}

export default FileField;
