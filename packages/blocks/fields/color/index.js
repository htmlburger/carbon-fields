/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.color-field.block', 'carbon-fields/blocks', ( OriginalColorField ) => OriginalColorField );
