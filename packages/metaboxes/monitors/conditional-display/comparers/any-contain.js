/**
 * External dependencies.
 */
import { intersection } from 'lodash';

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
				return intersection( a, b ).length > 0;
			case 'NOT IN':
				return intersection( a, b ).length === 0;
			default:
				return false;
		}
	}
};
