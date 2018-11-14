/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';

addFilter( 'carbon-fields.html-field.metabox', 'carbon-fields/metaboxes', ( OriginalHtmlField ) => withField( OriginalHtmlField ) );
