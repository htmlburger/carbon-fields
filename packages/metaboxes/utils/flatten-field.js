/**
 * External dependencies.
 */
import {
	pick,
	uniqueId,
	cloneDeep
} from 'lodash';

/**
 * Flattens a field.
 *
 * @param  {Object}   field
 * @param  {string}   containerId
 * @param  {Object[]} accumulator
 * @return {Object}
 */
export default function flattenField( field, containerId, accumulator ) {
	field = cloneDeep( field );

	// Replace the id of the field.
	field.id = uniqueId( 'carbon-fields-' );

	// Keep reference to the container.
	field.container_id = containerId;

	// The complex fields represent a nested structure of fields.
	// So we need to flat them as well.
	if ( field.type === 'complex' ) {
		field.value.forEach( ( group ) => {
			group.id = uniqueId( 'carbon-fields-' );
			group.container_id = containerId;
			group.fields = group.fields.map( ( groupField ) => flattenField( groupField, containerId, accumulator ) );
		} );
	}

	accumulator.push( field );

	return pick( field, [
		'id',
		'type',
		'name',
		'base_name'
	] );
}
