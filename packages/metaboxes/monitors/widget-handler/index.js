/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';
import { dispatch, select } from '@wordpress/data';
import { unmountComponentAtNode } from '@wordpress/element';
import { withEffects } from 'refract-callbag';
import { map, merge, pipe } from 'callbag-basics';

/**
 * Internal dependencies.
 */
import urldecode from '../../utils/urldecode';
import flattenField from '../../utils/flatten-field';
import { renderContainer } from '../../containers';
import { CARBON_FIELDS_CONTAINER_ID_PREFIX, PAGE_NOW_CUSTOMIZE } from '../../lib/constants';
import {
	fromCreatedUpdatedWidgetEvent,
	fromDeleteWidgetEvent
} from '../../utils/widget-events';

const getWidgetId = ( widget ) => {
	return window.jQuery( widget )
		.find( '[name="widget-id"]' )
		.val();
};

const widgetIdToContainerId = ( widgetId ) => {
	return CARBON_FIELDS_CONTAINER_ID_PREFIX + widgetId;
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
			pipe(
				fromCreatedUpdatedWidgetEvent(),
				map( ( payload ) => ( {
					type: 'CREATED_UPDATED_WIDGET',
					payload
				} ) )
			),

			pipe(
				fromDeleteWidgetEvent(),
				map( ( payload ) => ( {
					type: 'DELETED_WIDGET',
					payload
				} ) )
			)
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
		const { type } = effect;
		const { getContainerById } = select( 'carbon-fields/metaboxes' );
		const {
			addContainer,
			removeContainer,
			addFields,
			removeFields
		} = dispatch( 'carbon-fields/metaboxes' );

		switch ( type ) {
			case 'CREATED_UPDATED_WIDGET': {
				const { $widgetContainer } = effect.payload;

				let containerData = $widgetContainer
					.find( '[data-json]' )
					.data( 'json' );

				if ( ! containerData ) {
					return;
				}

				const widgetId = getWidgetId( $widgetContainer );

				const fields = [];

				containerData = urldecode( containerData );
				containerData = JSON.parse( containerData );

				const container = containerData;

				let oldFieldIds;

				if ( event.type === 'widget-updated' ) {
					oldFieldIds = _.map( getContainerById( container.id ).fields, 'id' );
				}

				container.fields = _.map( container.fields, ( field ) => flattenField( field, container, fields ) );

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
					window.jQuery( $widgetContainer )
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

			case 'DELETED_WIDGET': {
				const { widgetId } = effect.payload;
				const containerId = widgetIdToContainerId( widgetId );

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

const applyWithEffects = withEffects( handler )( aperture );

export default compose(
	applyWithEffects
)( WidgetHandler );
