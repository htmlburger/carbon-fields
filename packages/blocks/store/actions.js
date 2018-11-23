/**
 * Returns an action object used to setup the definitions state when first opening an editor.
 *
 * @param  {Object} definitions
 * @return {Object}
 */
export function setupFieldDefinitions( definitions ) {
	return {
		type: 'SETUP_FIELD_DEFINITIONS',
		payload: {
			definitions
		}
	};
}

/**
 * Returns an action object used to record the validation error.
 *
 * @param  {string} fieldId
 * @param  {string} error
 * @return {Object}
 */
export function setValidationError( fieldId, error ) {
	return {
		type: 'SET_VALIDATION_ERROR',
		payload: {
			fieldId,
			error
		}
	};
}

/**
 * Returns an action object used to clear the validation error.
 *
 * @param  {string} fieldId
 * @return {Object}
 */
export function clearValidationError( fieldId ) {
	return {
		type: 'CLEAR_VALIDATION_ERROR',
		payload: {
			fieldId
		}
	};
}
