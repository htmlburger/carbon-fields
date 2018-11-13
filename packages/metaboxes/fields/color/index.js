/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.color-field.metabox', 'carbon-fields/metaboxes', ( OriginalColorField ) => withField( OriginalColorField ) );
