/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.gravity_form-field.block', 'carbon-fields/blocks', ( OriginalSelectField ) => withValidation( OriginalSelectField ) );
