/**
 * External dependencies.
 */
import { isObject, isEmpty } from 'lodash';

/**
 * Validates the given value.
 *
 * @param  {mixed}   value
 * @return {?string}
 */
export default function required( value ) {
	if ( ( isObject( value ) && ! isEmpty( value ) ) || !! value ) {
		return null;
	}

	return carbonFieldsL10n.field.messageRequiredField;
}
