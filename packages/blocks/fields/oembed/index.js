/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.oembed-field.block', 'carbon-fields/blocks', ( OriginalOembedField ) => OriginalOembedField );
