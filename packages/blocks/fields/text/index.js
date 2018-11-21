/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.text-field.block', 'carbon-fields/blocks', ( OriginalTextField ) => OriginalTextField );
