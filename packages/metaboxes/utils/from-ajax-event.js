/**
 * External dependencies.
 */
import create from 'callbag-create';
import { isString } from 'lodash';

export default function fromAjaxEvent( eventName, action ) {
	return create( ( sink ) => {
		// Emit the AJAX event through the channel.
		const { handler } = ( event, xhr, settings, data ) => {
			if ( isString( settings.data ) && settings.data.indexOf( action ) > -1 ) {
				sink( 1, {
					event,
					xhr,
					settings,
					data
				} );
			}
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			window.jQuery( document ).off( eventName, { handler } );
		};

		// Setup the subscription.
		window.jQuery( document ).on( eventName, { handler } );

		return unsubscribe;
	} );
}
