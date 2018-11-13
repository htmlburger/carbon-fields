/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.checkbox-field.metabox', 'carbon-fields/metaboxes', ( OriginalCheckboxField ) => withField( OriginalCheckboxField ) );
