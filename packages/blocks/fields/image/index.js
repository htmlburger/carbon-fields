/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.image.block', 'carbon-fields/blocks', ( OriginalImageField ) => ( props ) => {
	return (
		<OriginalImageField
			buttonLabel={ __( 'Select Image', 'carbon-fields' ) }
			mediaLibraryButtonLabel={ __( 'Use this Image', 'carbon-fields' ) }
			mediaLibraryTitle={ __( 'Select Image', 'carbon-fields' ) }
			{ ...props }
		/>
	);
} );
