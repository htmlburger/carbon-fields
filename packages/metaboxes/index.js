/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { values, isUndefined } from 'lodash';
import { render } from '@wordpress/element';
import { select } from '@wordpress/data';

/**
 * Internal dependencies.
 */
import { getContainerType } from './containers/registry';

/**
 * The internal dependencies.
 */
import './store';
import './fields';
import './containers';

/**
 * Detects if we're rendering on page that is using Gutenberg.
 *
 * @type {boolean}
 */
const isGutenberg = ! isUndefined( window._wpLoadGutenbergEditor );

/**
 * Abracadabra! Poof! Containers everywhere ...
 */
values( select( 'carbon-fields/metaboxes' ).getContainers() ).forEach( ( container ) => {
	const node = document.querySelector( `.container-${ container.id }` );
	const Component = getContainerType( container.type, isGutenberg ? 'gutenberg' : 'classic' );

	if ( node ) {
		render(
			<Component id={ container.id } />,
			node
		);
	} else {
		console.error( `Could not find DOM element for container "${ container.id }".` );
	}
} );
