/* eslint eqeqeq: "off" */

/**
 * External dependencies.
 */
import {
	some,
	every,
	castArray
} from 'lodash';

/**
 * Performs comparison of the values.
 *
 * @param  {mixed}  left
 * @param  {string} operator
 * @param  {mixed}  right
 * @return {boolean}
 */
export default function compare( left, operator, right ) {
	switch ( operator ) {
		case '=':
			return left == right;

		case '!=':
			return left != right;

		case '>':
			return left > right;

		case '<':
			return left < right;

		case '>=':
			return left >= right;

		case '<=':
			return left <= right;

		case 'IN':
			return some( right, ( value ) => value == left );

		case 'NOT IN':
			return every( right, ( value ) => value != left );

		case 'INCLUDES':
			return every( castArray( right ), ( value ) => left.indexOf( value ) > -1 );

		case 'EXCLUDES':
			return every( castArray( right ), ( value ) => left.indexOf( value ) === -1 );
	}

	return false;
}
