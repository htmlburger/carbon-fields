/**
 * External dependencies.
 */
import create from 'callbag-create';

export default function fromWidgetEvent() {
	return create( ( sink ) => {
		// Emit the event through the channel.
		const { handler } = ( event, widget ) => {
			sink( 1, {
				event,
				widget
			} );
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			window.jQuery( document ).off( 'widget-before-added widget-added widget-updated', { handler } );
		};

		// Setup the subscription.
		window.jQuery( document ).on( 'widget-before-added widget-added widget-updated', { handler } );

		return unsubscribe;
	} );
}
