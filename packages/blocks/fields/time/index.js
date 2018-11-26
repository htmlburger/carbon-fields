/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.time-field.block', 'carbon-fields/blocks', ( OriginalDateTimeField ) => withValidation( ( props ) => (
	<OriginalDateTimeField buttonText={ __( 'Select Time' ) } { ...props } />
) ) );
