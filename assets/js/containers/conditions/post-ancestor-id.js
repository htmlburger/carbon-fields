/**
 * The external dependecies.
 */
import { map, intersection, isArray } from 'lodash';

/**
 * The internal dependencies.
 */
import equality from 'containers/comparers/any-equality';
import contain from 'containers/comparers/any-contain';
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

		return this.firstSupportedComparerIsCorrect(
			env.post_ancestors,
			compare,
			value
		);
	},
};
