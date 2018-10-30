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
 * Returns a container by an id.
 *
 * @param  {Object} state
 * @param  {string} containerId
 * @return {?Object}
 */
export function getContainerById( state, containerId ) {
	return state.containers[ containerId ];
}

/**
 * Returns a field by an id.
 *
 * @param  {Object} state
 * @param  {string} fieldId
 * @return {?Object}
 */
export function getFieldById( state, fieldId ) {
	return state.fields[ fieldId ];
}
