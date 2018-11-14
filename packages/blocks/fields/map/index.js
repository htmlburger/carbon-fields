/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.map-field.block', 'carbon-fields/blocks', ( OriginalMapField ) => OriginalMapField );
