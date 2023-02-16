/**
 * External dependencies.
 */
import of from 'callbag-of';
import startWith from 'callbag-start-with';
import { addFilter } from '@wordpress/hooks';
import {
	pipe,
	map,
	fromEvent
} from 'callbag-basics';

/**
 * The default state.
 *
 * @type {Object}
 */
const INITIAL_STATE = {
	user_role: ''
};

/**
 * Extracts `user_role` from a select.
 *
 * @param  {Object} node
 * @return {Object}
 */
function getRoleFromSelect( node ) {
	return {
		user_role: node.value
	};
}

/**
 * Defines the side effects for Classic Editor.
 */
addFilter( 'carbon-fields.conditional-display-user-role.classic', 'carbon-fields/metaboxes', ( ) => {
	const node = document.querySelector( 'select#role' );

	if ( ! node ) {
		const fieldset = document.querySelector( 'fieldset[data-profile-role]' );

		// The selectbox doesn't exist on the "Profile" page.
		// So we need to read the role from the container in DOM.
		if ( fieldset ) {
			return of( {
				user_role: fieldset.dataset.profileRole
			} );
		}

		return of( INITIAL_STATE );
	}

	return pipe(
		fromEvent.default( node, 'change' ),
		map( ( { target } ) => getRoleFromSelect( target ) ),
		startWith( getRoleFromSelect( node ) )
	);
} );

