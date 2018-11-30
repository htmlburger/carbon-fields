/**
 * Returns the validation error for the specified field.
 *
 * @param  {Object} state
 * @param  {string} fieldId
 * @return {mixed}
 */
export function getValidationError( state, fieldId ) {
	return state.validation[ fieldId ] || null;
}
