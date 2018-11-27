/**
 * The external dependencies.
 */
import {
	find,
	map,
	mapKeys,
	pick,
	template,
	isNull
} from 'lodash';

/**
 * Compile Lodash template of the group's label.
 *
 * @param  {Array}  groups
 * @param  {Object} group
 * @param  {number} index
 * @return {string}
 */
export const getComplexLabel = ( groups, group, index ) => {
	const groupData = find( groups, [ 'name', group._type ] );

	if ( isNull( groupData.label_template ) ) {
		return groupData.label;
	}

	const fieldNames = map( groupData.fields, 'name' )
		.map( ( field ) => field.replace( /^_(.*)/, '$1' ) );

	const fields = mapKeys( pick( group, fieldNames ), ( value, key ) => key.replace( /\-/g, '_' ) );

	try {
		const args = {
			$_index: index,
			...fields
		};

		const label = template( groupData.label_template )( args );

		if ( ! label ) {
			return group.label;
		}

		return label;
	} catch ( e ) {
		// eslint-disable-next-line
		console.error( e );
	}

	return 'N/A';
};
