/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.select-field.block', 'carbon-fields/blocks', ( OriginalSelectField ) => OriginalSelectField );
