/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { BaseControl, Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/editor';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const FileField = ( {
	buttonLabel,
	field,
	value,
	handleSelect,
	renderFileComponent
} ) => {
	return (
		<BaseControl label={ field.label }>
			<MediaUpload
				onSelect={ handleSelect }
				value={ value }
				render={ ( { open } ) => (
					<Fragment>
						<Button isDefault onClick={ open }>
							{ buttonLabel }
						</Button>

						{ renderFileComponent() }
					</Fragment>
				) }
			/>
		</BaseControl>
	);
};

addFilter( 'carbon-fields.file-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalFileField ) => ( { field, value, onChange } ) => {
	return (
		<OriginalFileField buttonLabelProp="fileButtonLabel" field={ field } onChange={ onChange } value={ value }>
			{ ( { ...props } ) => <FileField field={ field } value={ value } { ...props } /> }
		</OriginalFileField>
	);
} );
