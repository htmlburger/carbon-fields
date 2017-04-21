/**
 * The internal dependencies.
 */
import equality from 'containers/comparers/equality';
import contain from 'containers/comparers/contain';
import scalar from 'containers/comparers/scalar';

export default {
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
		const {
			type,
			compare,
			value
		} = definition;

		return this.firstSupportedComparerIsCorrect(env[type], compare, value);
	},

	/**
	 * Check if any comparer is correcty for `a` and `b`.
	 *
	 * @param  {mixed}   a
	 * @param  {String}  operator
	 * @param  {mixed}   b
	 * @return {Boolean}
	 */
	firstSupportedComparerIsCorrect(a, operator, b) {
		const comparer = this.comparers.find(comparer => comparer.supportsOperator(operator));

		if (!comparer) {
			throw new Error(`Unsupported container condition comparison operator used: ${operator}`);
		}

		return comparer.evaluate(a, operator, b);
	},
};
