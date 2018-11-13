/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.set-field.block', 'carbon-fields/blocks', ( OriginalSetField ) => OriginalSetField );
