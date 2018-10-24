/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { values, isUndefined } from 'lodash';
import { render } from '@wordpress/element';
import { select } from '@wordpress/data';
import { getContainerType } from '@carbon-fields/core';

/**
 * The internal dependencies.
 */
import './fields';

/**
 * Detects if we're rendering on page that is using Gutenberg.
 *
 * @type {boolean}
 */
const isGutenberg = ! isUndefined( window._wpLoadGutenbergEditor );

/**
 * Abracadabra! Poof! Containers everywhere ...
 */
values( select( 'carbon-fields/core' ).getContainers() ).forEach( ( container ) => {
	const node = document.querySelector( `.container-${ container.id }` );
	const Component = getContainerType( container.type, isGutenberg ? 'gutenberg' : 'classic' );

	if ( node ) {
		render(
			<Component container={ container } />,
			node
		);
	} else {
		console.error( `Could not find DOM element for container "${ container.id }".` );
	}
} );
