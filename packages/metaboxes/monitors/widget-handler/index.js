/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';
import { dispatch, select } from '@wordpress/data';
import { unmountComponentAtNode } from '@wordpress/element';
import { withEffects } from 'refract-callbag';
import { merge } from 'callbag-basics';
import { map, isString, startsWith } from 'lodash';

/**
 * Internal dependencies.
 */
import fromWidgetEvent from '../../utils/from-widget-event';
import fromAjaxEvent from '../../utils/from-ajax-event';
import urldecode from '../../utils/urldecode';
import flattenField from '../../utils/flatten-field';
import { renderContainer } from '../../containers/helpers';
import { PAGE_NOW_CUSTOMIZE } from '../../lib/constants';

const ID_PREFIX = 'carbon_fields_container_';
const carbonWidgetIdPrefix = 'carbon_fields_';

/**
 * Track the widgets that are being added.
 */
const widgetsToAdd = new Set();

const getWidgetId = ( widget ) => {
	return window.jQuery( widget )
		.find( '[name="widget-id"]' )
		.val();
};

const widgetIdToContainerId = ( widgetId ) => {
	return ID_PREFIX + widgetId;
};

/**
 * Performs the evaluation of conditions.
 *
 * @todo Improve docs
 * @return {null}
 */
function WidgetHandler() {
	return null;
}

/**
 * The function that controls the stream of side effects.
 *
 * @return {Function}
 */
function aperture() {
	return function() {
		return merge(
			// pipe(
			fromWidgetEvent(),
			// 		map( ( payload ) => ( {
			// 			type: 'CREATED_WIDGET',
			// 			payload
			// 		} ) )
			// 	),

			// 	pipe(
			fromAjaxEvent( 'ajaxSend', 'save-widget' ),
			// 		map( ( payload ) => ( {
			// 			type: 'DELETED_WIDGET',
			// 			payload
			// 		} ) )
			// 	)
		);
	};
}

/**
 * The function that causes the side effects.
 *
 * @return {Function}
 */
function handler() {
	return function( effect ) {
		const { event } = effect;
		const { getContainerById } = select( 'carbon-fields/metaboxes' );
		const {
			addContainer,
			removeContainer,
			addFields,
			removeFields
		} = dispatch( 'carbon-fields/metaboxes' );

		let widgetId, container;

		switch ( event.type ) {
			case 'widget-updated':
			case 'widget-added':
				// handle create / update widget
				const { widget } = effect;

				if ( ! widget ) {
					return;
				}

				container = window.jQuery( widget )
					.find( '[data-json]' )
					.data( 'json' );

				if ( ! container ) {
					return;
				}

				widgetId = getWidgetId( widget );

				if ( event.type === 'widget-before-added' ) {
					widgetsToAdd.add( widgetId );
				}

				const fields = [];

				container = urldecode( container );
				container = JSON.parse( container );

				let oldFieldIds;

				if ( event.type === 'widget-updated' ) {
					oldFieldIds = map( getContainerById( container.id ).fields, 'id' );
				}

				container.fields = map( container.fields, ( field ) => flattenField( field, container, fields ) );

				addFields( fields );
				addContainer( container );

				if ( event.type === 'widget-updated' ) {
					removeFields( oldFieldIds );
				}

				renderContainer( container, 'classic' );

				// WARNING: This piece of code manipulates the core behavior of WordPress Widgets.
				// Some day this code will stop to work and we'll need to find another workaround.
				//
				// * Disable the submit handler since it breaks our validation logic.
				// * Disable live preview mode because we can't detect when the widget is updated/synced.
				// * Show the "Apply" button because it's hidden by the live mode.

				const pagenow = 'todo';

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

			// handle delete widget
			case 'ajaxSend':
				if ( isString( effect.settings ) || effect.settings.data.indexOf( 'delete_widget=1' ) === -1 ) {
					return;
				}

				const { data } = effect.settings;
				widgetId = data.match( /widget-id=(.+?)\&/ )[ 1 ];
				const containerId = widgetIdToContainerId( widgetId );

				// Don't care about other widgets.
				if ( ! startsWith( widgetId, carbonWidgetIdPrefix ) ) {
					return;
				}

				// Get the container from the store.
				container = getContainerById( containerId );

				// Remove the current instance from DOM.
				unmountComponentAtNode( document.querySelector( `.container-${ containerId }` ) );

				// Get the fields that belongs to the container.
				const fieldsIds = map( container.fields, 'id' );

				// Remove everything from the store.
				setTimeout( () => {
					removeContainer( containerId );
					removeFields( fieldsIds );
				}, 1 );

				break;
		}
	};
}

const applyWithEffects = withEffects( handler )( aperture );

export default compose(
	applyWithEffects
)( WidgetHandler );
