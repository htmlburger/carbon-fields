/**
 * The internal dependencies.
 */
import base from 'containers/comparers/base';

/**
 * The supported operators by this comparer.
 *
 * @type {Array}
 */
const operators = ['CUSTOM'];

/**
 * Perform the comparison.
 *
 * @param  {mixed}   a
 * @param  {String}  operator
 * @param  {mixed}   b
 * @return {Boolean}
 *
 * TODO: Ask Nasko for more information what should return here.
 */
const evaluate = (a, operator, b) => {
	return true;
};

export default {
	...base(operators),
	evaluate,
};

