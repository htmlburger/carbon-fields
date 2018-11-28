/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { values } from 'lodash';
import { render } from '@wordpress/element';
import { select } from '@wordpress/data';

/**
 * Internal dependencies.
 */
import initializeConditionalDisplay from './conditional-display';
import initializeMonitors from './monitors';
import isGutenberg from './utils/is-gutenberg';
import { getContainerType } from './containers/registry';

/**
 * The internal dependencies.
 */
import './store';
import './fields';
import './containers';

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
initializeConditionalDisplay( context );

values( select( 'carbon-fields/metaboxes' ).getContainers() ).forEach( ( container ) => {
	const node = document.querySelector( `.container-${ container.id }` );
	const Component = getContainerType( container.type, context );

	if ( node ) {
		render(
			<Component id={ container.id } />,
			node
		);
	} else {
		console.error( `Could not find DOM element for container "${ container.id }".` );
	}
} );
