/**
 * Internal dependencies.
 */
import base from './base';

export default {
	...base,

	/**
	 * @inheritdoc
	 */
	operators: [ 'IN', 'NOT IN' ],

	/**
	 * @inheritdoc
	 */
	evaluate( a, operator, b ) {
		switch ( operator ) {
			case 'IN':
				return b.indexOf( a ) > -1;
			case 'NOT IN':
				return b.indexOf( a ) === -1;
			default:
				return false;
		}
	}
};
