/**
 * External dependencies.
 */
import { dispatch, select } from '@wordpress/data';
import { unmountComponentAtNode } from '@wordpress/element';
import { startsWith, flow } from 'lodash';
import { withEffects } from 'refract-callbag';
import {
	map,
	merge,
	pipe,
	filter
} from 'callbag-basics';

/**
 * Internal dependencies.
 */
import urldecode from '../../utils/urldecode';
import flattenField from '../../utils/flatten-field';
import fromEventPattern from '../../utils/from-event-pattern';
import { renderContainer } from '../../containers';
import {
	CARBON_FIELDS_CONTAINER_ID_PREFIX,
	CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX,
	PAGE_NOW_CUSTOMIZE
} from '../../lib/constants';

/**
 * Performs the re-initialization of widgets.
 *
 * @return {null}
 */
function WidgetHandler() {
	return null;
}

/**
 * Returns whether the widget is created by Carbon Fields.
 *
 * @param  {string} identifier
 * @return {boolean}
 */
function isCarbonFieldsWidget( identifier ) {
	return identifier.indexOf( CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX ) > -1;
}

/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */
function aperture() {
	return merge(
		pipe(
			fromEventPattern(
				( handler ) => window.jQuery( document ).on( 'widget-added widget-updated', handler ),
				( handler ) => window.jQuery( document ).off( 'widget-added widget-updated', handler ),
				( event, $widget ) => ( {
					event,
					$widget
				} )
			),
			filter( ( { $widget } ) => {
				return isCarbonFieldsWidget( $widget[ 0 ].id );
			} ),
			map( ( payload ) => ( {
				type: 'WIDGET_CREATED_OR_UPDATED',
				payload
			} ) )
		),

		pipe(
			fromEventPattern(
				( handler ) => window.jQuery( document ).on( 'ajaxSend', handler ),
				( handler ) => window.jQuery( document ).off( 'ajaxSend', handler ),
				( event, xhr, options, data ) => ( {
					event,
					xhr,
					options,
					data
				} )
			),
			filter( ( { options } ) => {
				return startsWith( options.data, CARBON_FIELDS_CONTAINER_ID_PREFIX );
			} ),
			map( ( payload ) => ( {
				type: 'WIDGET_BEIGN_UPDATED_OR_DELETED',
				payload
			} ) )
		)
	);
}

/**
 * The function that causes the side effects.
 *
 * @return {Function}
 */
function handler() {
	return function( effect ) {
		const { getContainerById } = select( 'carbon-fields/metaboxes' );
		const {
			addContainer,
			removeContainer,
			addFields,
			removeFields
		} = dispatch( 'carbon-fields/metaboxes' );

		switch ( effect.type ) {
			case 'WIDGET_CREATED_OR_UPDATED': {
				const { event, $widget } = effect.payload;

				const container = flow(
					urldecode,
					JSON.parse
				)(
					$widget
						.find( '[data-json]' )
						.data( 'json' )
				);

				const fields = [];

				container.fields = container.fields.map( ( field ) => flattenField( field, container, fields ) );

				addFields( fields );
				addContainer( container );

				renderContainer( container, 'classic' );

				// WARNING: This piece of code manipulates the core behavior of WordPress Widgets.
				// Some day this code will stop to work and we'll need to find another workaround.
				//
				// * Disable the submit { handler } since it breaks our validation logic.
				// * Disable live preview mode because we can't detect when the widget is updated/synced.
				// * Show the "Apply" button because it's hidden by the live mode.
				if ( window.cf.config.pagenow === PAGE_NOW_CUSTOMIZE && event.type === 'widget-added' ) {
					const widgetId = $widget
						.find( '[name="widget-id"]' )
						.val();

					$widget
						.find( '[name="savewidget"]' )
						.show()
						.end()
						.find( '.widget-content:first' )
						.off( 'keydown', 'input' )
						.off( 'change input propertychange', ':input' );

					const instance = wp.customize.Widgets.getWidgetFormControlForWidget( widgetId );

					// Change the flag for 'live mode' so we can receive proper `widget-updated` events.
					instance.liveUpdateMode = false;
				}

				break;
			}

			case 'WIDGET_BEIGN_UPDATED_OR_DELETED': {
				const [ , widgetId ] = effect.payload.options.data.match( /widget-id=(.+?)&/ );

				const containerId = `${ CARBON_FIELDS_CONTAINER_ID_PREFIX }${ widgetId }`;

				// Get the container from the store.
				const container = getContainerById( containerId );

				// Remove the current instance from DOM.
				unmountComponentAtNode( document.querySelector( `.container-${ containerId }` ) );

				// Get the fields that belongs to the container.
				const fieldsIds = _.map( container.fields, 'id' );

				// Remove everything from the store.
				removeContainer( containerId );
				removeFields( fieldsIds );

				break;
			}
		}
	};
}

export default withEffects( aperture, { handler } )( WidgetHandler );
