/**
 * External dependencies.
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { Fragment, Component } from '@wordpress/element';
import { MediaUpload } from '@wordpress/editor';
import {
	BaseControl,
	Button,
	Placeholder
} from '@wordpress/components';
import { pick } from 'lodash';

class FileField extends Component {
	/**
	 * Handles the file selection.
	 *
	 * @param  {Object} file
	 * @return {void}
	 */
	handleSelect = ( file ) => {
		const { field, onChange } = this.props;

		onChange( field.base_name, pick( file, [ 'id', 'filename', 'mime', 'url' ] ) );
	}

	/**
	 * Renders the preview of the selected file.
	 *
	 * @return {mixed}
	 */
	renderPreview() {
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
			<Placeholder icon="media-document" label={ value.filename } />
		);
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			value,
			buttonLabel
		} = this.props;

		return (
			<BaseControl label={ field.label }>
				<MediaUpload
					onSelect={ this.handleSelect }
					value={ value }
					render={ ( { open } ) => (
						<Fragment>
							<Button isDefault onClick={ open }>
								{ buttonLabel }
							</Button>

							{ this.renderPreview() }
						</Fragment>
					) }
				/>
			</BaseControl>
		);
	}
}

addFilter( 'carbon-fields.file-field.block', 'carbon-fields/blocks', ( OriginalFileField ) => ( props ) => {
	return (
		<OriginalFileField { ...props }>
			{ ( {
				field,
				value,
				handleChange
			} ) => (
				<FileField
					field={ field }
					value={ value }
					buttonLabel={ __( 'Select File' ) }
					onChange={ handleChange }
				/>
			) }
		</OriginalFileField>
	);
} );
