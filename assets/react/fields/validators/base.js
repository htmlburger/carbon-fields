/**
 * The external dependencies.
 */
import { isEmpty } from 'lodash';

/**
 * The type of validator.
 *
 * @type {String}
 */
export const TYPE = 'VALIDATION_BASE';

/**
 * Handle the validation for most of the fields.
 *
 * @param  {Object} field
 * @return {String}
 */
export default function(field) {
	if (isEmpty(field.value)) {
		return crbl10n.message_required_field;
	}

	return '';
}
