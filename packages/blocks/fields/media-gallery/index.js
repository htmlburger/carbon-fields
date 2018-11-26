/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './style.scss';
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.media_gallery-field.block', 'carbon-fields/blocks', ( OriginalMediaGalleryField ) => withValidation( ( props ) => {
	return (
		<OriginalMediaGalleryField
			buttonLabel={ __( 'Select Attachments' ) }
			mediaLibraryButtonLabel={ __( 'Use Attachments' ) }
			mediaLibraryTitle={ __( 'Select Attachments' ) }
			{ ...props }
		/>
	);
} ) );
