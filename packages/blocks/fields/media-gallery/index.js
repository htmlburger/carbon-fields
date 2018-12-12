/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.media_gallery.block', 'carbon-fields/blocks', ( OriginalMediaGalleryField ) => ( props ) => {
	return (
		<OriginalMediaGalleryField
			buttonLabel={ __( 'Select Attachments', 'carbon-fields-ui' ) }
			mediaLibraryButtonLabel={ __( 'Use Attachments', 'carbon-fields-ui' ) }
			mediaLibraryTitle={ __( 'Select Attachments', 'carbon-fields-ui' ) }
			{ ...props }
		/>
	);
} );
