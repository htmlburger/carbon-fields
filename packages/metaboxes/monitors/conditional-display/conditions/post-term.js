/**
 * External dependencies.
 */
import { get, isArray } from 'lodash';

/**
 * Internal dependencies.
 */
import anyEquality from '../comparers/any-equality';
import base from './base';

export default {
	...base,

	/**
	 * @inheritdoc
	 */
	comparers: [
		anyEquality
	],

	/**
	 * @inheritdoc
	 */
	isFulfiled( definition, values ) {
		let { compare, value } = definition;

		if ( isArray( value ) ) {
			let method;

			switch ( compare ) {
				case 'IN':
					compare = '=';
					method = 'some';
					break;

				case 'NOT IN':
					compare = '!=';
					method = 'every';
					break;

				default:
					return false;
			}

			const results = value.map( ( descriptor ) => {
				return this.isFulfiled( {
					...definition,
					compare,
					value: descriptor
				}, values );
			} );

			return results[ method ]( Boolean );
		}

		// TODO: Improve value resolution in context of Gutenberg
		value = value.taxonomy_object.hierarchical
			? value.term_object.term_id
			: value.term_object.name;

		return this.firstComparerIsCorrect( this.getEnvironmentValue( definition, values ), compare, value );
	},

	/**
	 * @inheritdoc
	 */
	getEnvironmentValue( definition, values ) {
		return get( values, `post_term.${ definition.value.taxonomy }`, [] );
	}
};
