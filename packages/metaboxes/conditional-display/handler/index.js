/**
 * External dependencies.
 */
import { get, map } from 'lodash';

/**
 * Internal dependencies.
 */
import base from '../conditions/base';
import boolean from '../conditions/boolean';
import postAncestorId from '../conditions/post-ancestor-id';
import postTerm from '../conditions/post-term';

/**
 * Keeps track of supported conditions.
 *
 * @type {Object}
 */
const conditions = {
	boolean,
	post_ancestor_id: postAncestorId,
	post_term: postTerm,
	post_parent_id: base,
	post_level: base,
	post_format: base,
	post_template: base
};

/**
 * Walks through the definitions and evaluates the conditions.
 *
 * @param  {Object[]} definitions
 * @param  {Object}   values
 * @param  {string}   relation
 * @return {boolean}
 */
function evaluate( definitions, values, relation ) {
	const results = definitions.map( ( definition ) => {
		if ( ! definition.relation ) {
			const condition = get( conditions, definition.type );

			if ( condition ) {
				return condition.isFulfiled( definition, values );
			} else { // eslint-disable-line no-else-return
				// eslint-disable-next-line no-console
				console.error( `Unsupported container condition - "${ definition.type }".` );

				return false;
			}
		} else { // eslint-disable-line no-else-return
			return evaluate( definition.conditions, values, definition.relation );
		}
	} );

	switch ( relation ) {
		case 'AND':
			return results.every( Boolean );

		case 'OR':
			return results.some( Boolean );

		default:
			// eslint-disable-next-line no-console
			console.error( `Unsupported container condition relation used - "${ relation }".` );

			return false;
	}
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @param  {Object} props.containers
 * @return {Function}
 */
export default function handler( { containers } ) {
	return function( effect ) {
		const results = map( containers, ( container, id ) => {
			return [
				id,
				evaluate( container.conditions.conditions, effect, container.conditions.relation )
			];
		} );

		results.forEach( ( [ id, result ] ) => {
			const node = document.getElementById( id );

			if ( node ) {
				node.hidden = ! result;
			}
		} );
	};
}
