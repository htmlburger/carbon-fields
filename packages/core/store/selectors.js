/**
 * Gets the containers.
 *
 * @param  {Object} state
 * @return {Object[]}
 */
export function getContainers( state ) {
	return state.containers;
}

/**
 * Gets a field.
 *
 * @param  {Object} state
 * @param  {string} fieldId
 * @return {?Object}
 */
export function getFieldById( state, fieldId ) {
	return state.fields[ fieldId ];
}
