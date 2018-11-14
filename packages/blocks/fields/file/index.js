/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.file-field.block', 'carbon-fields/blocks', ( OriginalFileField ) => ( props ) => {
	return (
		<OriginalFileField buttonLabel={ __( 'Select File' ) } { ...props } />
	);
} );
