/**
 * External dependencies.
 */
import { isArray, isPlainObject } from 'lodash';

/**
 * Internal dependencies.
 */
import base from './base';

export default {
	...base,

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
	}
};
