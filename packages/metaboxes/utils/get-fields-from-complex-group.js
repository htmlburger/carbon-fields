/**
 * Returns a collection of fields that belongs to a group.
 *
 * @param  {Object}   group
 * @param  {Object}   fields
 * @param  {Object[]} [accumulator]
 * @return {Object[]}
 */
export default function getFieldsFromComplexGroup( group, fields, accumulator = [] ) {
	return group.fields.reduce( ( memo, fieldReference ) => {
		const field = fields[ fieldReference.id ];

		if ( ! field ) {
			return memo;
		}

		if ( field.type === 'complex' ) {
			memo = field.value.map( ( fieldGroup ) => getFieldsFromComplexGroup( fieldGroup, fields, memo ) );
		}

		memo.push( field );

		return memo;
	}, accumulator );
}
