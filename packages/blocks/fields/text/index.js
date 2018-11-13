/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.text-field.block', 'carbon-fields/blocks', ( OriginalTextField ) => OriginalTextField );
