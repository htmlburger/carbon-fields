/**
 * External dependencies.
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import { getContainerType } from './registry';

/**
 * Renders the given container.
 *
 * @param  {Object} container
 * @param  {string} context
 * @return {void}
 */
export const renderContainer = ( container, context ) => {
	const node = document.querySelector( `.container-${ container.id }` );
	const Component = getContainerType( container.type, context );

	if ( node ) {
		render(
			<Component id={ container.id } />,
			node
		);
	} else {
		// eslint-disable-next-line no-console
		console.error( `Could not find DOM element for container "${ container.id }".` );
	}
};
