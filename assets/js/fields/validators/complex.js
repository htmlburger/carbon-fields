/**
 * The external dependencies.
 */
import { isEmpty } from 'lodash';

/**
 * The internal dependencies.
 */
import { VALIDATION_COMPLEX } from 'fields/constants';

/**
 * The type of validator.
 *
 * @type {String}
 */
export const type = VALIDATION_COMPLEX;

/**
 * Debounce the validation.
 *
 * @type {Boolean}
 */
export const debounce = false;

/**
 * Handle the validation for the complex fields.
 *
 * @param  {Object}      field
 * @return {String|null}
 */
export function handler(field) {
	const {
		min,
		value,
		labels
	} = field;

	if (isEmpty(value)) {
		return carbonFieldsL10n.field.messageRequiredField;
	}

	if (min > 0 && value.length < min) {
		const label = min === 1 ? labels.singular_name : labels.plural_name;

		return carbonFieldsL10n.field.complexMinNumRowsNotReached
			.replace('%1$d', min)
			.replace('%2$s', label.toLowerCase());
	}

	return null;
}
