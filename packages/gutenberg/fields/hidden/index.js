/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.hidden-field.gutenberg', 'carbon-fields/gutenberg', () => () => null );
