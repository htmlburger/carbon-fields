/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './style.scss';
import withValidation from '../../components/with-validation';

addFilter( 'carbon-fields.date_time-field.block', 'carbon-fields/blocks', ( OriginalDateTimeField ) => withValidation( ( props ) => (
	<OriginalDateTimeField buttonText={ __( 'Select Date' ) } { ...props } />
) ) );
