/**
 * External dependencies.
 */
import { assign, endsWith } from 'lodash';

/**
 * Internal dependencies.
 */
import flattenField from '../utils/flatten-field';

/**
 * Transform the shape of the given state to be more Redux friendly.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function normalizePreloadedState( state ) {
	const fields = [];
	const containers = state
		.filter( ( { id } ) => ! endsWith( id, '__i__' ) )
		.map( ( container ) => {
			return assign( {}, container, {
				fields: container.fields.map( ( field ) => flattenField( field, container.id, fields ) )
			} );
		} );

	return { containers, fields };
}
