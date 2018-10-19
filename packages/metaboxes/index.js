/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { get } from 'lodash';
import { render } from '@wordpress/element';
import { getContainerType } from '@carbon-fields/core';

/**
 * The internal dependencies.
 */
import './fields';

/**
 * Abracadabra! Poof! Containers everywhere ...
 */
get( window.cf, 'preloaded.containers', [] ).forEach( ( container ) => {
	const Component = getContainerType( container.type, 'gutenberg' );
	const node = document.querySelector( `.container-${ container.id }` );

	if ( node ) {
		render(
			<Component context="gutenberg" container={ container } />,
			node
		);
	} else {
		console.error( `Could not find DOM element for container "${ container.id }".` );
	}
} );
