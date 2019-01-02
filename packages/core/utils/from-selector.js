/**
 * External dependencies.
 */
import { subscribe } from '@wordpress/data';

/**
 * Creates a callbag listenable source from a store's selector.
 *
 * @param  {Function} selector
 * @param  {...mixed} args
 * @return {Function}
 */
export default function fromSelector( selector, ...args ) {
	return function( start, sink ) {
		if ( start !== 0 ) {
			return;
		}

		const unsubscribe = subscribe( () => sink( 1, selector( ...args ) ) );

		sink( 0, ( type ) => {
			if ( type === 2 ) {
				unsubscribe();
			}
		} );

		sink( 1, selector( ...args ) );
	};
}
