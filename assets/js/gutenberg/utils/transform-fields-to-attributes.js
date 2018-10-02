/**
 * External dependencies.
 */
import { get, fromPairs } from 'lodash';

/**
 * Transforms the fields to an attributes set.
 *
 * @param  {Object}  fieldsHolder  An object that contains fields - Container, Complex Field.
 * @param  {Array[]} attributes    A list that contains already collected fields in case of recursive call.
 * @return {Array[]}               The list of collected fields.
 */
export default function transformFieldsToAttributes(fieldsHolder, attributes = []) {
	const fields = get(fieldsHolder, 'fields', []);
	const pairs = fields.reduce((attributes, field) => {
		// TODO: Handle the complex field.
		attributes.push([
			field.base_name,
			{
				default: field.default_value
			}
		]);

		return attributes;
	}, attributes);

	return fromPairs(pairs);
}
