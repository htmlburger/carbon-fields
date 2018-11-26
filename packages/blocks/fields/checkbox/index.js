/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.checkbox-field.block', 'carbon-fields/blocks', ( OriginalCheckboxField ) => withValidation( OriginalCheckboxField ) );
