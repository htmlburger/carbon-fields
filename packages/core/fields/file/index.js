/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class FileField extends Component {
	/**
	 * Handles the file selection
	 * @param  {Object} media
	 * @return {Null}
	 */
	handleSelect = ( { id, filename, mime, url } ) => {
		const { onChange, field } = this.props;

		onChange( { [ field.base_name ]: { id, filename, mime, url } } );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children( {
			handleSelect: this.handleSelect,
			renderFileComponent: this.renderFileComponent
		} );
	}
}

export default FileField;
