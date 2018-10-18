/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
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
	handleSelect
} ) => {
	return (
		<BaseControl label={ field.label }>
			<MediaUpload
				onSelect={ handleSelect }
				value={ value }
				render={ ( { open } ) => (
					<Button onClick={ open }>
						{ buttonLabel }
					</Button>
				) }
			/>
		</BaseControl>
	);
};

addFilter( 'carbon-fields.file-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalFileField ) => ( originalProps ) => {
	return (
		<OriginalFileField { ...originalProps } >
			{ ( { ...props } ) => <FileField { ...originalProps } { ...props } /> }
		</OriginalFileField>
	);
} );
