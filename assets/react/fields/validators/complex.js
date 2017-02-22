/**
 * The external dependencies.
 */
import { isEmpty } from 'lodash';

/**
 * The type of validator.
 *
 * @type {String}
 */
export const TYPE = 'VALIDATION_COMPLEX';

/**
 * Handle the validation for the complex fields.
 *
 * @param  {Object} field
 * @return {String}
 */
export default function(field) {
	const {
		min,
		value,
		labels
	} = field;

	if (isEmpty(value)) {
		return crbl10n.message_required_field;
	}

	if (min > 0 && value.length < min) {
		const label = min === 1 ? labels.singular_name : labels.plural_name;

		return crbl10n.complex_min_num_rows_not_reached
			.replace('%1$d', min)
			.replace('%2$s', label.toLowerCase());
	}

	return '';
}
