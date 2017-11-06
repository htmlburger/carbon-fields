/**
 * The external dependencies.
 */
// import InputMask from 'react-text-mask'


/**
 * The internal dependencies.
 */
import { VALIDATION_MASKED } from 'fields/constants';

import { conformToMask } from 'react-text-mask';

/**
 * The type of validator.
 *
 * @type {String}
 */
export const type = VALIDATION_MASKED;

/**
 * Debounce the validation.
 *
 * @type {Boolean}
 */
export const debounce = true;

/**
 * Valiadte masked field. 
 *
 * @param  {Object}      field
 * @return {String|null}
 */
export function handler(field) {
	const { mask, value, maskPlaceholder } = field;
	const result = conformToMask(value, mask, { placeholderChar: maskPlaceholder });
	if ( result.conformedValue.indexOf(maskPlaceholder) > -1 ) {
		return carbonFieldsL10n.field.wrongMask;
	}

	return null;
}
