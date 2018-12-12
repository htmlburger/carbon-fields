/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.time.block', 'carbon-fields/blocks', ( OriginalDateTimeField ) => ( props ) => (
	<OriginalDateTimeField
		icon="clock"
		buttonText={ __( 'Select Time', 'carbon-fields-ui' ) }
		{ ...props }
	/>
) );
