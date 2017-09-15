/**
 * The external dependecies.
 */
import { isArray, map } from 'lodash';

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
		scalar,
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

		if (isArray(value)) {
			value = map(value, val => val.term_object.term_id);
		} else {
			value = value.term_object.term_id;
		}

		return this.firstSupportedComparerIsCorrect(
			env.term_parent_id,
			compare,
			value
		);
	},
};
