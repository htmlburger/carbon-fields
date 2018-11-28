/**
 * External dependencies.
 */
import { map, values } from 'lodash';
import { withDispatch, select } from '@wordpress/data';
import { render } from '@wordpress/element';
import { compose, createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import initializeMonitors from '../../monitors';
import flattenField from '../../utils/flatten-field';
import urldecode from '../../utils/urldecode';
import isGutenberg from '../../utils/is-gutenberg';
import { getContainerType } from '../../containers/registry';

/**
 * Creates a high-order component which adds connection
 * to the store.
 *
 * @param  {Function} Component
 * @return {Function}
 */
export default createHigherOrderComponent( ( Component ) => {
	const applyWithDispatch = withDispatch( ( dispatch ) => {
		const {
			addContainer,
			addFields
		} = dispatch( 'carbon-fields/metaboxes' );

		const onReceiveContainer = ( container ) => {
			const fields = [];

			container = urldecode( container );
			container = JSON.parse( container );
			container.fields = map( container.fields, ( field ) => flattenField( field, container, fields ) );

			addContainer( container );
			addFields( fields );

			/**
			 * Determines the rendering context.
			 *
			 * @type {string}
			 */
			const context = isGutenberg() ? 'gutenberg' : 'classic';

			/**
			 * Abracadabra! Poof! Containers everywhere ...
			 */
			initializeMonitors( context );

			values( select( 'carbon-fields/metaboxes' ).getContainers() ).forEach( ( c ) => {
				const node = document.querySelector( `.container-${ c.id }` );
				const C = getContainerType( c.type, context );

				if ( node ) {
					render(
						<C id={ c.id } />,
						node
					);
				} else {
					// eslint-disable-next-line no-console
					console.error( `Could not find DOM element for container "${ c.id }".` );
				}
			} );

			// yield call(containerFactory, store, type, { id });
			// yield put(toggleContainerBox(id, expanded));
		};

		return {
			receiveContainer: onReceiveContainer
		};
	} );

	return compose( applyWithDispatch )( Component );
}, 'withReceiveContainer' );
