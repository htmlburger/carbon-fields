/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.file.metabox', 'carbon-fields/metaboxes', ( OriginalFileField ) => ( props ) => {
	return (
		<OriginalFileField
			buttonLabel={ __( 'Select File', 'carbon-fields' ) }
			mediaLibraryButtonLabel={ __( 'Use File', 'carbon-fields' ) }
			mediaLibraryTitle={ __( 'Select File', 'carbon-fields' ) }
			{ ...props }
		/>
	);
} );
