/**
 * The external dependencies.
 */
import { isEmpty } from 'lodash';

/**
 * The internal dependencies.
 */
import { VALIDATION_ASSOCIATION } from 'fields/constants';

/**
 * The type of validator.
 *
 * @type {String}
 */
export const type = VALIDATION_ASSOCIATION;

/**
 * Debounce the validation.
 *
 * @type {Boolean}
 */
export const debounce = false;

/**
 * Handle the validation for the association fields.
 *
 * @param  {Object}      field
 * @return {String|null}
 */
export function handler(field) {
	const {
		min,
		value,
		required
	} = field;


	if (required && isEmpty(value)) {
		return carbonFieldsL10n.field.messageRequiredField;
	}

	if (min > 0 && value.length < min) {
		return carbonFieldsL10n.field.minNumItemsNotReached.replace('%s', field.min);
	}

	return null;
}
