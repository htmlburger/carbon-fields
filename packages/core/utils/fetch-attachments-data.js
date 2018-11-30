/**
 * The external dependencies.
 */
import { __ } from '@wordpress/i18n';

export default ( attachments ) => {
	return new Promise( ( resolve, reject ) => {
		// eslint-disable-next-line
		let request = $.post( window.ajaxurl, {
			action: 'query-attachments',
			query: {
				post__in: attachments
			}
		} );

		request.done( ( response ) => {
			resolve( response.data );
		} );

		request.fail( () => {
			reject( __( 'An error occurred while trying to fetch files data.', 'carbon-fields' ) );
		} );
	} );
};
