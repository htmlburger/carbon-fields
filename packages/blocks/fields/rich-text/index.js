/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.rich_text-field.block', 'carbon-fields/blocks', ( OriginalRichTextField ) => withValidation( OriginalRichTextField ) );
