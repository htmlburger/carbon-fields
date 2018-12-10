/**
 * External dependencies.
 */
import { unmountComponentAtNode } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { get, map } from 'lodash';

/**
 * Internal dependencies.
 */
import { renderContainer } from '../../../containers';
import base from '../conditions/base';
import boolean from '../conditions/boolean';
import postTerm from '../conditions/post-term';
import postAncestorId from '../conditions/post-ancestor-id';
import termParentId from '../conditions/term-parent-id';
import termAncestorId from '../conditions/term-ancestor-id';

/**
 * Keeps track of supported conditions.
 *
 * @type {Object}
 */
const conditions = {
	boolean,
	post_term: postTerm,
	post_ancestor_id: postAncestorId,
	post_parent_id: base,
	post_level: base,
	post_format: base,
	post_template: base,
	term_level: base,
	term_parent: termParentId,
	term_ancestor: termAncestorId,
	user_role: base
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
				console.error( sprintf( __( 'Unsupported container condition - "%1$s".', 'carbon-fields-ui' ), definition.type ) );

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
			console.error( sprintf( __( 'Unsupported container condition relation used - "%1$s".', 'carbon-fields-ui' ), relation ) );

			return false;
	}
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @param  {Object} props.containers
 * @param  {string} props.context
 * @return {Function}
 */
export default function handler( { containers, context } ) {
	return function( effect ) {
		const results = map( containers, ( container, id ) => {
			return [
				id,
				evaluate( container.conditions.conditions, effect, container.conditions.relation )
			];
		} );

		results.forEach( ( [ id, result ] ) => {
			const postboxNode = document.getElementById( id );
			const containerNode = document.querySelector( `.container-${ id }` );

			if ( postboxNode ) {
				postboxNode.hidden = ! result;
			}

			if ( containerNode ) {
				if ( result && ! containerNode.dataset.mounted ) {
					containerNode.dataset.mounted = true;

					renderContainer( containers[ id ], context );
				}

				if ( ! result && containerNode.dataset.mounted ) {
					delete containerNode.dataset.mounted;

					unmountComponentAtNode( containerNode );
				}
			}
		} );
	};
}
