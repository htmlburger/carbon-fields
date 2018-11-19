/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.image-field.metabox', 'carbon-fields/metaboxes', ( OriginalImageField ) => withField( ( props ) => {
	return (
		<OriginalImageField
			buttonLabel={ __( 'Select Image' ) }
			mediaLibraryButtonLabel={ __( 'Use Image' ) }
			mediaLibraryTitle={ __( 'Select Image' ) }
			{ ...props }
		/>
	);
} ) );
