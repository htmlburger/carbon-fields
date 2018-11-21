/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.textarea-field.block', 'carbon-fields/blocks', ( OriginalTextareaField ) => OriginalTextareaField );
