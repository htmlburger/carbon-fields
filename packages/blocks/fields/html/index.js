/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.html-field.block', 'carbon-fields/blocks', ( OriginalHtmlField ) => OriginalHtmlField );
