/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.color-field.block', 'carbon-fields/blocks', ( OriginalColorField ) => withValidation( OriginalColorField ) );
