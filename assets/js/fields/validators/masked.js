/**
 * The external dependencies.
 */
import InputMask from 'inputmask-core'


/**
 * The internal dependencies.
 */
import { VALIDATION_MASKED } from 'fields/constants';

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
	const { mask, value } = field;
	
	// const inputMask = new InputMask({pattern: mask, value});

	// if ( inputMask.value.indexOf(inputMask.placeholderChar) > -1 ) {
	// 	return carbonFieldsL10n.field.wrongMask.replace('%s', mask);
	// }

	return null;
}
