/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.rich_text-field.metabox', 'carbon-fields/metaboxes', ( OriginalRichTextField ) => withField( OriginalRichTextField ) );
