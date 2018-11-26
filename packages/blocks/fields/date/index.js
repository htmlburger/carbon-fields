/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.date-field.block', 'carbon-fields/blocks', ( OriginalDatetimeField ) => withValidation( ( props ) => (
	<OriginalDatetimeField buttonText={ __( 'Select Date' ) } { ...props } />
) ) );
