/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import './style.scss';
import withField from '../../components/with-field';

addFilter( 'carbon-fields.media_gallery-field.metabox', 'carbon-fields/metaboxes', ( OriginalMediaGalleryField ) => withField( ( props ) => {
	return (
		<OriginalMediaGalleryField
			buttonLabel={ __( 'Select Attachments' ) }
			mediaLibraryButtonLabel={ __( 'Use Attachments' ) }
			mediaLibraryTitle={ __( 'Select Attachments' ) }
			{ ...props }
		/>
	);
} ) );
