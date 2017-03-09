/**
 * The internal dependencies.
 */
import base from 'containers/conditions/base';

export default {
	...base,

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

		return this.firstSupportedComparerIsCorrect(true, compare, value);
	},
};
