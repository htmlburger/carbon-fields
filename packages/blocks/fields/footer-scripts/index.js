/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.footer_scripts-field.block', 'carbon-fields/blocks', () => () => null );
