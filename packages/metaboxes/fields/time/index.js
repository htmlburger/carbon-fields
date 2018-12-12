/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.time.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => ( props ) => (
	<OriginalDatetimeField
		icon="clock"
		buttonText={ __( 'Select Time', 'carbon-fields-ui' ) }
		{ ...props }
	/>
) );
