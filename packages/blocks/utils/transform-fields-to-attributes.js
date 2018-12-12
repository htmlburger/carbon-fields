/**
 * Transforms the fields to an attributes set.
 *
 * @param  {Object[]} fields
 * @return {Object}
 */
export default function transformFieldsToAttributes( fields ) {
	return fields.reduce( ( attributes, field ) => {
		return {
			...attributes,
			[ field.base_name ]: field.default_value
		};
	}, {} );
}
