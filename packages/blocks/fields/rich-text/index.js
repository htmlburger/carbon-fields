/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.rich_text-field.block', 'carbon-fields/blocks', ( OriginalRichTextField ) => OriginalRichTextField );
