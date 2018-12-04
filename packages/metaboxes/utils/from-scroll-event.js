/**
 * External dependencies.
 */
import create from 'callbag-create';

export default function fromScrollEvent( selector ) {
	return create( ( sink ) => {
		// Emit the event through the channel.
		const handler = () => {
			const topOffset = window.jQuery( selector ).scrollTop();

			sink( 1, topOffset );
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			window.jQuery( selector ).off( 'scroll', handler );
		};

		// Setup the subscription.
		window.jQuery( selector ).on( 'scroll', handler );

		return unsubscribe;
	} );
}
