/**
 * External dependencies.
 */
import { __ } from '@wordpress/i18n';

export default ( url, method, data = null ) => {
	return new Promise( ( resolve, reject ) => {
		const request = window.jQuery.ajax( {
			url: url,
			type: method,
			data: data
		} );

		request.done( ( response ) => {
			resolve( response );
		} );

		request.fail( () => {
			reject( __( 'An error occured.', 'carbon-fields-ui' ) );
		} );
	} );
};
