/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { withEffects } from 'refract-callbag';
import { map, pipe } from 'callbag-basics';
import { get } from 'lodash';

/**
 * Internal dependencies.
 */
import withReceiveContainer from '../../hocs/with-receive-container';
import fromWidgetEvent from '../../utils/from-widget-event';
import { PAGE_NOW_CUSTOMIZE } from '../../lib/constants';

const getWidgetId = ( widget ) => {
	return window.jQuery( widget )
		.find( '[name="widget-id"]' )
		.val();
};

/**
 * Track the widgets that are being added.
 */
const widgetsToAdd = new Set();

function aperture() {
	return function() {
		return pipe(
			fromWidgetEvent(),
			map( ( { event, widget } ) => ( { event, widget } ) ),
			map( ( payload ) => ( {
				type: 'CREATED_WIDGET',
				payload: payload
			} ) )
		);
	};
}

function handler( props ) {
	const pagenow = get( window.cf, 'preloaded.pagenow' );

	return function( effect ) {
		switch ( effect.type ) {
			case 'CREATED_WIDGET':
				const { event, widget } = effect.payload;
				const container = window.jQuery( widget )
					.find( '[data-json]' )
					.data( 'json' );

				if ( ! container ) {
					return;
				}

				const widgetId = getWidgetId( widget );

				if ( event.type === 'widget-before-added' ) {
					widgetsToAdd.add( widgetId );
				}

				props.receiveContainer( container );

				// WARNING: This piece of code manipulates the core behavior of WordPress Widgets.
				// Some day this code will stop to work and we'll need to find another workaround.
				//
				// * Disable the submit handler since it breaks our validation logic.
				// * Disable live preview mode because we can't detect when the widget is updated/synced.
				// * Show the "Apply" button because it's hidden by the live mode.
				if ( pagenow === PAGE_NOW_CUSTOMIZE && event.type === 'widget-added' ) {
					window.jQuery( widget )
						.find( '[name="savewidget"]' )
						.off( 'click' )
						.show()
						.end()
						.find( '.widget-content:first' )
						.off( 'keydown', 'input' )
						.off( 'change input propertychange', ':input' );

					const widgetInstance = wp.customize.Widgets.getWidgetFormControlForWidget( widgetId );

					// Change the flag for 'live mode' so we can receive proper `widget-updated` events.
					widgetInstance.liveUpdateMode = false;
				}

				break;
		}
	};
}

addFilter( 'carbon-fields.widget.classic', 'carbon-fields/metaboxes', compose(
	withReceiveContainer,
	withEffects( handler )( aperture )
) );
