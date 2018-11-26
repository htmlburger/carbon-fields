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

addFilter( 'carbon-fields.file-field.block', 'carbon-fields/blocks', ( OriginalFileField ) => withValidation( ( props ) => {
	return (
		<OriginalFileField
			buttonLabel={ __( 'Select File' ) }
			mediaLibraryButtonLabel={ __( 'Use File' ) }
			mediaLibraryTitle={ __( 'Select File' ) }
			{ ...props }
		/>
	);
} ) );
