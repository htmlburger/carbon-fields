/**
 * The external dependencies.
 */
import { isEmpty, isObject } from 'lodash';

/**
 * The internal dependencies.
 */
import { VALIDATION_BASE } from 'fields/constants';

/**
 * The type of validator.
 *
 * @type {String}
 */
export const type = VALIDATION_BASE;

/**
 * Debounce the validation.
 *
 * @type {Boolean}
 */
export const debounce = true;

/**
 * Handle the validation for most of the fields.
 *
 * @param  {Object}      field
 * @return {String|null}
 */
export function handler(field) {
	const hasValue = isObject(field.value) ? !isEmpty(field.value) : !!field.value;
	if (!hasValue) {
		return carbonFieldsL10n.field.messageRequiredField;
	}

	return null;
}
