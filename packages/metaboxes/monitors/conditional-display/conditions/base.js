/**
 * External dependencies.
 */
import { __, sprintf } from '@wordpress/i18n';
import { find } from 'lodash';

/**
 * Internal dependencies.
 */
import equality from '../comparers/equality';
import contain from '../comparers/contain';
import scalar from '../comparers/scalar';

export default {
	/**
	 * The supported comparers.
	 *
	 * @type {Function[]}
	 */
	comparers: [
		equality,
		contain,
		scalar
	],

	/**
	 * Checks if the condition is fulfiled.
	 *
	 * @param  {Object} definition
	 * @param  {Object} values
	 * @return {boolean}
	 */
	isFulfiled( definition, values ) {
		const { compare, value } = definition;

		return this.firstComparerIsCorrect( this.getEnvironmentValue( definition, values ), compare, value );
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
		const comparer = find( this.comparers, ( item ) => item.isOperatorSupported( operator ) );

		if ( ! comparer ) {
			// eslint-disable-next-line no-console
			console.error( sprintf( __( 'Unsupported container condition comparison operator used - "%1$s".', 'carbon-fields-ui' ), operator ) );

			return false;
		}

		return comparer.evaluate( a, operator, b );
	},

	/**
	 * Returns the value from the environment.
	 *
	 * @param  {Object} definition
	 * @param  {Object} values
	 * @return {Object}
	 */
	getEnvironmentValue( definition, values ) {
		return values[ definition.type ];
	}
};
