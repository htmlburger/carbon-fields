/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.multiselect-field.block', 'carbon-fields/blocks', ( OriginalMultiselectField ) => withValidation( OriginalMultiselectField ) );
