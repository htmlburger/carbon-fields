export default {
	/**
	 * The supported operators.
	 *
	 * @type {string[]}
	 */
	operators: [],

	/**
	 * Checks if the operator is supported.
	 *
	 * @param  {string} operator
	 * @return {boolean}
	 */
	isOperatorSupported( operator ) {
		return this.operators.indexOf( operator ) > -1;
	},

	/**
	 * Performs the comparison.
	 *
	 * @param  {mixed}  a
	 * @param  {string} operator
	 * @param  {mixed}  b
	 * @return {boolean}
	 */
	evaluate() {
		return false;
	}
};
