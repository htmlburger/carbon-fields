/**
 * The external dependecies.
 */
import { get, isArray } from 'lodash';

/**
 * The internal dependencies.
 */
import equality from 'containers/comparers/equality-array';
import contain from 'containers/comparers/contain-array';
import custom from 'containers/comparers/custom';
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
		contain,
		custom,
	],

	/**
	 * Check if the condition is fulfiled.
	 *
	 * @param  {Object}  definition
	 * @param  {Object}  env
	 * @return {Boolean}
	 */
	isFulfiled(definition, env) {
		const {
			type,
			compare,
			value
		} = definition;

		// In case of `IN` and `NOT IN` comparers.
		if (isArray(value)) {
			const results = value.map(value => this.isFulfiled({
				...definition,
				value,
			}, env));

			return results.some(Boolean);
		}

		return this.firstSupportedComparerIsCorrect(
			get(env, `${type}.${value.taxonomy}`, []),
			compare,
			value.value
		);
	},
};
