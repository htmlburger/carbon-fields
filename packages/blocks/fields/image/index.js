/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import { FileField } from '../file';

addFilter( 'carbon-fields.image-field.block', 'carbon-fields/blocks', ( OriginalFileField ) => ( props ) => {
	return (
		<FileField { ...props }>
			{ ( subProps ) => (
				<OriginalFileField buttonLabel={ __( 'Select Image' ) } { ...props } { ...subProps } />
			) }
		</FileField>
	);
} );
