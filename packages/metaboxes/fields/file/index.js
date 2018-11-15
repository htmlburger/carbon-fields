/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

export class FileField extends Component {
	/**
	 * Defines the components state
	 *
	 * @return {void}
	 */
	constructor() {
		super();

		this.state = {
			fileData: null
		};
	}

	/**
	 * Handles the change of the field
	 *
	 * @param  {string} id
	 * @param  {Object} file
	 * @return {void}
	 */
	handleChange = ( id, file = null ) => {
		const { onChange } = this.props;

		onChange( id, file ? file.id : '' );

		this.setState( { fileData: file } );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { fileData } = this.state;
		const { field, children } = this.props;

		return children( {
			onChange: this.handleChange,
			fileData: fileData
				? fileData
				: {
					url: field.value_meta.file_url,
					filename: field.value_meta.file_name
				}
		} );
	}
}

addFilter( 'carbon-fields.file-field.metabox', 'carbon-fields/metaboxes', ( OriginalFileField ) => withField( ( props ) => {
	return (
		<FileField { ...props }>
			{ ( subProps ) => (
				<OriginalFileField buttonLabel={ __( 'Select File' ) } { ...props } { ...subProps } />
			) }
		</FileField>
	);
} ) );
