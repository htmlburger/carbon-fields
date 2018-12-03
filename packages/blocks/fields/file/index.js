/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.file.block', 'carbon-fields/blocks', ( OriginalFileField ) => ( props ) => {
	return (
		<OriginalFileField
			buttonLabel={ __( 'Select File', 'carbon-fields-ui' ) }
			mediaLibraryButtonLabel={ __( 'Use File', 'carbon-fields-ui' ) }
			mediaLibraryTitle={ __( 'Select File', 'carbon-fields-ui' ) }
			{ ...props }
		/>
	);
} );
