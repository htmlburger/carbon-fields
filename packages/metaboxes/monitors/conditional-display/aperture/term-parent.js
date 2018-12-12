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
 * Internal dependencies.
 */
import getParentIdFromOption from '../utils/get-parent-id-from-option';
import getLevelFromOption from '../utils/get-level-from-option';
import getAncestorsFromOption from '../utils/get-ancestors-from-option';

/**
 * The default state.
 *
 * @type {Object}
 */
const INITIAL_STATE = {
	term_ancestors: [],
	term_parent: 0,
	term_level: 1
};

/**
 * Extracts the `term_ancestors`, `term_parent` & `term_level` from the select.
 *
 * @param  {Object} node
 * @return {Object}
 */
function getParentIdAncestorsAndLevelFromSelect( node ) {
	const option = node.options[ node.selectedIndex ];
	const ancestors = getAncestorsFromOption( option );
	const parentId = getParentIdFromOption( option );
	const level = getLevelFromOption( option ) + 1;

	return {
		term_ancestors: ancestors,
		term_parent: parentId,
		term_level: level
	};
}

/**
 * Defines the side effects for Classic Editor.
 */
addFilter( 'carbon-fields.conditional-display-term-parent.classic', 'carbon-fields/metaboxes', ( ) => {
	const node = document.querySelector( 'select#parent' );

	if ( ! node ) {
		return of( INITIAL_STATE );
	}

	return pipe(
		fromEvent( node, 'change' ),
		map( ( { target } ) => getParentIdAncestorsAndLevelFromSelect( target ) ),
		startWith( getParentIdAncestorsAndLevelFromSelect( node ) )
	);
} );

