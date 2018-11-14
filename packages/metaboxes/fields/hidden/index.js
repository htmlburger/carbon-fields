/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.hidden-field.metabox', 'carbon-fields/metaboxes', ( OriginalHiddenField ) => withField( OriginalHiddenField ) );
