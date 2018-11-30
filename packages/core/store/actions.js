/**
 * Returns an action object used to mark the field as valid.
 *
 * @param  {string} fieldId
 * @return {Object}
 */
export function markAsValid( fieldId ) {
	return {
		type: 'MARK_AS_VALID',
		payload: {
			fieldId
		}
	};
}

/**
 * Returns an action object used to mark the field as invalid.
 *
 * @param  {string} fieldId
 * @param  {string} error
 * @return {Object}
 */
export function markAsInvalid( fieldId, error ) {
	return {
		type: 'MARK_AS_INVALID',
		payload: {
			fieldId,
			error
		}
	};
}

/**
 * Returns an action object used to show the field.
 *
 * @param  {string} fieldId
 * @return {Object}
 */
export function showField( fieldId ) {
	return {
		type: 'SHOW_FIELD',
		payload: {
			fieldId
		}
	};
}

/**
 * Returns an action object used to hide the field.
 *
 * @param  {string} fieldId
 * @return {Object}
 */
export function hideField( fieldId ) {
	return {
		type: 'HIDE_FIELD',
		payload: {
			fieldId
		}
	};
}
