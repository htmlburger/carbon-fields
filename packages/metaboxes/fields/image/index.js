/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';
import { FileField } from '../file';

addFilter( 'carbon-fields.image-field.metabox', 'carbon-fields/metaboxes', ( OriginalFileField ) => withField( ( props ) => {
	return (
		<FileField { ...props }>
			{ ( subProps ) => (
				<OriginalFileField buttonLabel={ __( 'Select Image' ) } { ...props } { ...subProps } />
			) }
		</FileField>
	);
} ) );
