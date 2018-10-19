/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.hidden-field.block', 'carbon-fields/blocks', () => () => null );
