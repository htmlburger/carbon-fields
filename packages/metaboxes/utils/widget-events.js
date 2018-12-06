/**
 * External dependencies.
 */
import create from 'callbag-create';
import { startsWith } from 'lodash';

/**
 * Internal dependencies.
 */
import { CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX } from '../lib/constants';

/**
 * Helper function that determines whether a Carbon Fields widget have been deleted.
 *
 * @param  {string} xhrResponse
 * @return {boolean|string}
 */
const isCarbonFieldsWidgetBeingDeleted = ( xhrResponse ) => {
	if ( xhrResponse.indexOf( 'deleted:' ) !== 0 ) {
		return false;
	}

	const widgetId = xhrResponse.slice( 8 );

	if ( ! startsWith( widgetId, CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX ) ) {
		return false;
	}

	return widgetId;
};

export const fromCreatedUpdatedWidgetEvent = () => {
	return create( ( sink ) => {
		// Emit the event through the channel.
		const { handler } = ( event, $widgetContainer ) => {
			sink( 1, {
				event,
				$widgetContainer
			} );
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			window.jQuery( document ).off( 'widget-added widget-updated', { handler } );
		};

		// Setup the subscription.
		window.jQuery( document ).on( 'widget-added widget-updated', { handler } );

		return unsubscribe;
	} );
};

export const fromDeleteWidgetEvent = () => {
	return ( start, sink ) => {
		if ( start !== 0 ) {
			return;
		}

		let disposed = false;

		// Emit the event through the channel.
		const { handler } = ( event, xhr ) => {
			// Don't care about other widgets.
			const widgetId = isCarbonFieldsWidgetBeingDeleted( xhr.responseText );

			if ( widgetId ) {
				sink( 1, {
					event,
					widgetId
				} );
			}
		};

		sink( 0, ( t ) => {
			if ( t !== 2 ) {
				return;
			}

			disposed = true;
			window.jQuery( document ).ajaxSuccess( { handler } );
		} );

		if ( disposed ) {
			return;
		}

		// Setup the subscription.
		window.jQuery( document ).ajaxSuccess( { handler } );
	};
};
