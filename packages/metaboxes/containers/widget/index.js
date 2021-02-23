/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { withEffects } from 'refract-callbag';
import { pipe, map } from 'callbag-basics';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * The function that controls the stream of side effects.
 *
 * @param  {Object} component
 * @return {Object}
 */
function aperture( component ) {
	const mount$ = component.mount;

	return pipe( mount$, map( () => ( {
		type: 'COMPONENT_MOUNTED'
	} ) ) );
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */

function handler( props ) {
	return function( effect ) {
		switch ( effect.type ) {
			case 'COMPONENT_MOUNTED':
				const { container } = props;

				const $carbonContainer = window.jQuery( `.container-${ container.id }` );

				// trigger change when the expand button is clicked
				$carbonContainer
					.closest( '.widget' )
					.find( '.widget-top' )
					.on( 'click', () => {
						setTimeout( () => {
							$carbonContainer.trigger( 'change' );
							$carbonContainer.closest( 'form' ).find( 'input[type="submit"]' ).trigger( 'click' );
						}, 500 );
					} );

				break;
		}
	};
}

addFilter( 'carbon-fields.widget.classic', 'carbon-fields/metaboxes', withEffects( aperture, { handler } ) );
