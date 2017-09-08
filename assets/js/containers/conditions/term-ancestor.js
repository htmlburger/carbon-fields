/**
 * The external dependecies.
 */
import { map, intersection, isArray } from 'lodash';

/**
 * The internal dependencies.
 */
import equality from 'containers/comparers/equality';
import contain from 'containers/comparers/contain';
import scalar from 'containers/comparers/scalar';
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
			compare,
			value
		} = definition;

		value = isArray(value) ? value : [value];
		value = map(value, val => val.term_object.term_id);

		switch (compare) {
			case '=': // fallthrough intended
			case 'IN':
				return intersection(env.term_ancestors, value).length > 0;
				break;

			case '!=': // fallthrough intended
			case 'NOT IN':
				return intersection(env.term_ancestors, value).length === 0;
				break;
		}

		return this.firstSupportedComparerIsCorrect(
			env.term_ancestors,
			compare,
			value
		);
	},
};
