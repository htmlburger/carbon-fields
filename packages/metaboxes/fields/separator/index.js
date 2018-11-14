/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.separator-field.metabox', 'carbon-fields/metaboxes', ( OriginalSeparatorField ) => withField( OriginalSeparatorField ) );
