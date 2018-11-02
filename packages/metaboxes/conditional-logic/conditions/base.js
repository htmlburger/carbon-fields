/**
 * External dependencies.
 */
import { find } from 'lodash';

/**
 * Internal dependencies.
 */
import equality from '../comparers/equality';

export default {
	/**
	 * The supported comparers.
	 *
	 * @type {Function[]}
	 */
	comparers: [
		equality
	],

	/**
	 * Checks if the condition is fulfiled.
	 *
	 * @param  {Object} definition
	 * @param  {Object} values
	 * @return {boolean}
	 */
	isFulfiled( definition, values ) {
		const {
			type,
			compare,
			value
		} = definition;

		return this.firstComparerIsCorrect( values[ type ], compare, value );
	},

	/**
	 * Checks if any comparer is correct for `a` and `b`.
	 *
	 * @param  {mixed}  a
	 * @param  {string} operator
	 * @param  {mixed}  b
	 * @return {boolean}
	 */
	firstComparerIsCorrect( a, operator, b ) {
		const comparer = find( this.comparers, ( { isOperatorSupported } ) => isOperatorSupported( operator ) );

		if ( ! comparer ) {
			// eslint-disable-next-line no-console
			console.error( `Unsupported container condition comparison operator used - "${ operator }".` );

			return false;
		}

		return comparer.evaluate( a, operator, b );
	}
};
