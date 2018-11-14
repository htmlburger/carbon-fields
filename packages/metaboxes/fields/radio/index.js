/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.radio-field.metabox', 'carbon-fields/metaboxes', ( OriginalRadioField ) => withField( OriginalRadioField ) );
