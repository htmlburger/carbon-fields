/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.image-field.block', 'carbon-fields/blocks', ( OriginalImageField ) => withValidation( ( props ) => {
	return (
		<OriginalImageField
			buttonLabel={ __( 'Select Image' ) }
			mediaLibraryButtonLabel={ __( 'Use this Image' ) }
			mediaLibraryTitle={ __( 'Select Image' ) }
			{ ...props }
		/>
	);
} ) );
