/**
 * External dependencies.
 */
import { includes } from 'lodash';

/**
 * Internal dependencies.
 */
import base from './base';

export default {
	...base,

	/**
	 * @inheritdoc
	 */
	operators: [ '=', '!=' ],

	/**
	 * @inheritdoc
	 */
	evaluate( a, operator, b ) {
		switch ( operator ) {
			case '=':
				return includes( a, b );
			case '!=':
				return ! includes( a, b );
			default:
				return false;
		}
	}
};

