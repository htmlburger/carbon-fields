/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.set-field.block', 'carbon-fields/blocks', ( OriginalSetField ) => OriginalSetField );
