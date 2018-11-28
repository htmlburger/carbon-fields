/**
 * External dependencies.
 */
import {
	get,
	isArray,
	isPlainObject
} from 'lodash';

/**
 * Internal dependencies.
 */
import anyEquality from '../comparers/any-equality';
import anyContain from '../comparers/any-contain';
import base from './base';

export default {
	...base,

	/**
	 * @inheritdoc
	 */
	comparers: [
		anyEquality,
		anyContain
	],

	/**
	 * @inheritdoc
	 */
	isFulfiled( definition, values ) {
		const { compare } = definition;
		let { value } = definition;

		if ( isArray( value ) ) {
			value = value.map( ( item ) => item.term_object.term_id );
		} else if ( isPlainObject( value ) ) {
			value = value.term_object.term_id;
		}

		return this.firstComparerIsCorrect( this.getEnvironmentValue( definition, values ), compare, value );
	},

	/**
	 * @inheritdoc
	 */
	getEnvironmentValue( definition, values ) {
		return get( values, 'term_ancestors', [] );
	}
};
