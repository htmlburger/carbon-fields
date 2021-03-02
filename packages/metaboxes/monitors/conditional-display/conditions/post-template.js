/**
 * External dependencies.
 */
import { isArray } from 'lodash';

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
		definition = { ...definition };

		// In Gutenberg for the "Default" template is used an empty string.
		if ( definition.value === 'default' ) {
			definition.value = '';
		} else if ( isArray( definition.value ) ) {
			const defaultIndex = definition.value.indexOf( 'default' );

			if ( defaultIndex !== -1 ) {
				definition.value[ defaultIndex ] = '';
			}
		}

		return base.isFulfiled( definition, values );
	}
};
