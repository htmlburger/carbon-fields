/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.file-field.metabox', 'carbon-fields/metaboxes', ( OriginalFileField ) => withField( ( props ) => {
	return (
		<OriginalFileField buttonLabel={ __( 'Select File' ) } { ...props } />
	);
} ) );
