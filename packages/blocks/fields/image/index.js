/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.image.block', 'carbon-fields/blocks', ( OriginalImageField ) => ( props ) => {
	return (
		<OriginalImageField
			buttonLabel={ __( 'Select Image' ) }
			mediaLibraryButtonLabel={ __( 'Use this Image' ) }
			mediaLibraryTitle={ __( 'Select Image' ) }
			{ ...props }
		/>
	);
} );
