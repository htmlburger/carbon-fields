/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.date_time.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => ( props ) => (
	<OriginalDatetimeField
		buttonText={ __( 'Select Date', 'carbon-fields-ui' ) }
		{ ...props }
	/>
) );
