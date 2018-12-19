/**
 * External dependencies.
 */
import { __ } from '@wordpress/i18n';
import { isObject, isEmpty } from 'lodash';

/**
 * Validates the given value.
 *
 * @param  {mixed}   value
 * @return {?string}
 */
export default function required( value ) {
	const isObjectValue = isObject( value );

	if ( ( isObjectValue && ! isEmpty( value ) ) || ( ! isObjectValue && !! value ) ) {
		return null;
	}

	return __( 'This field is required.', 'carbon-fields-ui' );
}
