/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.sidebar-field.gutenberg', 'carbon-fields/gutenberg', () => () => null );
