/**
 * External dependencies.
 */
import { dispatch, select } from '@wordpress/data';
import { unmountComponentAtNode } from '@wordpress/element';
import { flow } from 'lodash';
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
import { CARBON_FIELDS_CONTAINER_ID_PREFIX } from '../../lib/constants';

/**
 * Performs the re-initialization of nav menu items.
 *
 * @return {null}
 */
function NavMenuHandler() {
	return null;
}

function hasCarbonFields( $node ) {
	return $node.find( `[data-id^="${ CARBON_FIELDS_CONTAINER_ID_PREFIX }"]` ).length > 0;
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
				( handler ) => window.jQuery( document ).on( 'menu-item-added', handler ),
				( handler ) => window.jQuery( document ).off( 'menu-item-added', handler ),
				( event, $nodes ) => ( {
					event,
					$nodes
				} )
			),
			filter( ( { $nodes } ) => {
				return hasCarbonFields( $nodes );
			} ),
			map( ( payload ) => ( {
				type: 'NAV_MENU_ITEMS_ADDED',
				payload
			} ) )
		),

		pipe(
			fromEventPattern(
				( handler ) => window.jQuery( document ).on( 'menu-removing-item', handler ),
				( handler ) => window.jQuery( document ).off( 'menu-removing-item', handler ),
				( event, $node ) => ( {
					event,
					$node
				} )
			),
			filter( ( { $node } ) => {
				return hasCarbonFields( $node );
			} ),
			map( ( payload ) => ( {
				type: 'NAV_MENU_ITEM_DELETED',
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
			case 'NAV_MENU_ITEMS_ADDED': {
				const { $nodes } = effect.payload;

				const containers = $nodes.map( ( index, node ) => {
					const $node = window.jQuery( node );
					if ( $node.find( '[data-json]' ).length > 0 ) {
						return flow(
							urldecode,
							JSON.parse
						)( $node.find( '[data-json]' ).data( 'json' ) );
					}
				} );

				containers.each( ( index, container ) => {
					const fields = [];
					container.fields = container.fields.map( ( field ) => flattenField( field, container, fields ) );

					addFields( fields );
					addContainer( container );

					renderContainer( container, 'classic' );
				} );

				break;
			}

			case 'NAV_MENU_ITEM_DELETED': {
				const { $node } = effect.payload;
				const containerId = $node.find( `[data-id^="${ CARBON_FIELDS_CONTAINER_ID_PREFIX }"]` ).data( 'id' );

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

export default withEffects( aperture, { handler } )( NavMenuHandler );
