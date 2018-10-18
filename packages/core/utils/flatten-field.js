/**
 * External dependencies.
 */
import { assign, pick } from 'lodash';

/**
 * Flattens a field.
 *
 * TODO:
 * - Handle complex fields.
 *
 * @param  {Object}   field
 * @param  {string}   containerId
 * @param  {Object[]} accumulator
 * @return {Object}
 */
export default function flattenField( field, containerId, accumulator ) {
	field.container_id = containerId;

	accumulator.push( assign( {}, field, {
		container_id: containerId
	} ) );

	return pick( field, [
		'id',
		'type',
		'name',
		'base_name'
	] );
}
