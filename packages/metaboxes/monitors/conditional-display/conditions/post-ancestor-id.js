/**
 * External dependencies.
 */
import { get } from 'lodash';

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
	getEnvironmentValue( definition, values ) {
		return get( values, 'post_ancestors', [] );
	}
};
