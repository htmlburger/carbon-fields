/**
 * The external dependecies.
 */
import { get, isArray } from 'lodash';

/**
 * The internal dependencies.
 */
import equality from 'containers/comparers/any-equality';
import base from 'containers/conditions/base';

export default {
	...base,

	/**
	 * The supported comparers.
	 *
	 * @type {Function[]}
	 */
	comparers: [
		equality,
	],

	/**
	 * Check if the condition is fulfiled.
	 *
	 * @param  {Object}  definition
	 * @param  {Object}  env
	 * @return {Boolean}
	 */
	isFulfiled(definition, env) {
		let {
			type,
			compare,
			value
		} = definition;

		// In case of `IN` and `NOT IN` comparers.
		if (isArray(value)) {
			let method;

			if (compare === 'IN') {
				compare = '=';
				method = 'some';
			} else if (compare === 'NOT IN') {
				compare = '!=';
				method = 'every';
			}

			const results = value.map(value => this.isFulfiled({
				...definition,
				compare,
				value,
			}, env));

			return results[method](Boolean);
		}

		const {
			taxonomy,
			taxonomy_object,
			term_object,
		} = value;

		value = taxonomy_object.hierarchical
			? term_object['term_id']
			: term_object['name'];

		return this.firstSupportedComparerIsCorrect(
			get(env, `${type}.${taxonomy}`, []),
			compare,
			value
		);
	},
};
