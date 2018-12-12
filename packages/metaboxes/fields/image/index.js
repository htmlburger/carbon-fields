/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.image.metabox', 'carbon-fields/metaboxes', ( OriginalImageField ) => ( props ) => {
	return (
		<OriginalImageField
			buttonLabel={ __( 'Select Image', 'carbon-fields-ui' ) }
			mediaLibraryButtonLabel={ __( 'Use Image', 'carbon-fields-ui' ) }
			mediaLibraryTitle={ __( 'Select Image', 'carbon-fields-ui' ) }
			{ ...props }
		/>
	);
} );
