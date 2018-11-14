/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.sidebar-field.block', 'carbon-fields/blocks', () => () => null );
