/**
 * Internal dependencies.
 */
import base from './base';

export default {
	...base,

	/**
	 * @inheritdoc
	 */
	operators: [ '>', '>=', '<', '<=' ],

	/**
	 * @inheritdoc
	 */
	evaluate( a, operator, b ) {
		switch ( operator ) {
			case '>':
				return a > b;
			case '>=':
				return a >= b;
			case '<':
				return a < b;
			case '<=':
				return a <= b;
			default:
				return false;
		}
	}
};
