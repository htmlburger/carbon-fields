/**
 * The exterma; dependencies.
 */
import { intersection } from 'lodash';

/**
 * The internal dependencies.
 */
import base from 'containers/comparers/base';

/**
 * The supported operators by this comparer.
 *
 * @type {Array}
 */
const operators = ['IN', 'NOT IN'];

/**
 * Perform the comparison.
 *
 * @param  {mixed}   a
 * @param  {String}  operator
 * @param  {mixed}   b
 * @return {Boolean}
 */
const evaluate = (a, operator, b) => {
	switch (operator) {
		case 'IN':
			return intersection(a, b).length > 0;
		case 'NOT IN':
			return intersection(a, b).length === 0;
		default:
			return false;
	}
};

export default {
	...base(operators),
	evaluate,
};
