/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.file-field.metabox', 'carbon-fields/metaboxes', ( OriginalFileField ) => withField( OriginalFileField ) );
