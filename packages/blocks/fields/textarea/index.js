/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.textarea-field.block', 'carbon-fields/blocks', ( OriginalTextareaField ) => OriginalTextareaField );
