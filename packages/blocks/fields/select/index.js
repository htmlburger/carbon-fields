/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.select-field.block', 'carbon-fields/blocks', ( OriginalSelectField ) => OriginalSelectField );
