/**
 * External dependencies.
 */
import startWith from 'callbag-start-with';
import { addFilter } from '@wordpress/hooks';
import {
	pipe,
	map,
	fromEvent
} from 'callbag-basics';

/**
 * Extracts the post's parent from the option.
 *
 * @param  {Object} option
 * @return {number}
 */
function getParentIdFromOption( option ) {
	const value = parseInt( option.value, 10 );

	return ! isNaN( value ) ? value : 0;
}

/**
 * Extracts the post's level from the option.
 *
 * @param  {Object} option
 * @return {number}
 */
function getLevelFromOption( option ) {
	let level = 0;

	if ( option.className ) {
		const matches = option.className.match( /^level-(\d+)/ );

		if ( matches ) {
			level = parseInt( matches[ 1 ], 10 ) + 1;
		}
	}

	return level;
}

/**
 * Extracts the post's ancestors from the option.
 *
 * @param  {Object} option
 * @return {number[]}
 */
function getAncestorsFromOption( option ) {
	const ancestors = [];

	let previousOption = option;
	let level = getLevelFromOption( option );

	while ( level > 0 && previousOption ) {
		if ( getLevelFromOption( previousOption ) !== level ) {
			previousOption = previousOption.previousSibling;

			// Skip this iteration because the option isn't an ancestor.
			continue;
		}

		const id = parseInt( previousOption.value, 10 );

		if ( id > 0 ) {
			ancestors.unshift( id );
		}

		previousOption = previousOption.previousSibling;

		level--;
	}

	return ancestors;
}

/**
 * Extracts the `post_ancestors`, `post_parent_id` & `post_level` from the select.
 *
 * @param  {Object} select
 * @return {Object}
 */
function getParentIdAncestorsAndLevelFromSelect( select ) {
	const option = select.options[ select.selectedIndex ];
	const ancestors = getAncestorsFromOption( option );
	const parentId = getParentIdFromOption( option );
	const level = getLevelFromOption( option ) + 1;

	return {
		post_ancestors: ancestors,
		post_parent_id: parentId,
		post_level: level
	};
}

addFilter( 'carbon-fields.conditional-logic-post-parent.classic', 'carbon-fields/metaboxes', ( ) => {
	const select = document.querySelector( 'select#parent_id' );

	if ( ! select ) {
		return startWith( {
			post_ancestors: [],
			post_parent_id: 0,
			post_level: 1
		} );
	}

	return pipe(
		fromEvent( select, 'change' ),
		map( ( { target } ) => getParentIdAncestorsAndLevelFromSelect( target ) ),
		startWith( getParentIdAncestorsAndLevelFromSelect( select ) )
	);
} );
