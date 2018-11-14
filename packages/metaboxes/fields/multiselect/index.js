/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.multiselect-field.metabox', 'carbon-fields/metaboxes', ( OriginalMultiselectField ) => withField( OriginalMultiselectField ) );
