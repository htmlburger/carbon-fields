/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.map-field.block', 'carbon-fields/blocks', ( OriginalMapField ) => OriginalMapField );
