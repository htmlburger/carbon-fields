/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.set-field.metabox', 'carbon-fields/metaboxes', ( OriginalSetField ) => withField( OriginalSetField ) );
