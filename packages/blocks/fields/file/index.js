/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { pick } from 'lodash';

/**
 * Internal dependencies.
 */
import './style.scss';

export class FileField extends Component {
	/**
	 * Handles the change of the field
	 *
	 * @param  {string} id
	 * @param  {Object} file
	 * @return {void}
	 */
	handleChange = ( id, file = null ) => {
		const { onChange } = this.props;

		onChange( id, file
			? pick( file, 'id', 'url', 'filename' )
			: ''
		);
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { value, children } = this.props;

		return children( {
			onChange: this.handleChange,
			fileData: value
		} );
	}
}

addFilter( 'carbon-fields.file-field.block', 'carbon-fields/blocks', ( OriginalFileField ) => ( props ) => {
	return (
		<FileField { ...props }>
			{ ( subProps ) => (
				<OriginalFileField buttonLabel={ __( 'Select File' ) } { ...props } { ...subProps } />
			) }
		</FileField>
	);
} );
