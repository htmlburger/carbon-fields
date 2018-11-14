/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.gravity_form-field.metabox', 'carbon-fields/metaboxes', ( OriginalSelectField ) => withField( OriginalSelectField ) );
