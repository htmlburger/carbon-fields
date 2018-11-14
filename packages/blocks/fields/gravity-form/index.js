/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'carbon-fields.gravity_form-field.block', 'carbon-fields/blocks', ( OriginalSelectField ) => OriginalSelectField );
