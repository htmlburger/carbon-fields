/**
 * The internal dependencies.
 */
import base from 'containers/comparers/base';

/**
 * The supported operators by this comparer.
 *
 * @type {Array}
 */
const operators = ['=', '!='];

/**
 * Perform the comparison.
 *
 * @param  {Array}   a
 * @param  {String}  operator
 * @param  {mixed}   b
 * @return {Boolean}
 */
const evaluate = (a, operator, b) => {
	switch (operator) {
		case '=':
			return a.includes(b);
		case '!=':
			return !a.includes(b);
		default:
			return false;
	}
};

export default {
	...base(operators),
	evaluate,
};

