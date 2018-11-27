/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.image.metabox', 'carbon-fields/metaboxes', ( OriginalImageField ) => ( props ) => {
	return (
		<OriginalImageField
			buttonLabel={ __( 'Select Image' ) }
			mediaLibraryButtonLabel={ __( 'Use Image' ) }
			mediaLibraryTitle={ __( 'Select Image' ) }
			{ ...props }
		/>
	);
} );
