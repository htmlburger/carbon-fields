/**
 * The external dependencies.
 */
import { __ } from '@wordpress/i18n';

export default ( attachments ) => {
	return new Promise( ( resolve, reject ) => {
		// eslint-disable-next-line
		let result = wp.media.ajax( {
			data: {
				action: 'query-attachments',
				query: {
					post__in: attachments
				}
			}
		} );

		result.done( ( response ) => {
			resolve( response );
		} );

		result.fail( () => {
			reject( __( 'An error occurred while trying to fetch files data.', 'carbon-fields-ui' ) );
		} );
	} );
};
