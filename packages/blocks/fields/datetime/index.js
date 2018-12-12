/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.date_time.block', 'carbon-fields/blocks', ( OriginalDateTimeField ) => ( props ) => (
	<OriginalDateTimeField
		buttonText={ __( 'Select Date', 'carbon-fields-ui' ) }
		{ ...props }
	/>
) );
