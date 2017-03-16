/**
 * The external dependencies.
 */
import { pickBy } from 'lodash';

export const getContainers = (state) => state.containers;
export const getContainerById = (state, containerId) => state.containers[containerId];
export const canProcessAction = (state, containerId, containerType) => getContainerById(state, containerId).type === containerType;

/**
 * Get all containers by type.
 *
 * @param  {Object} state
 * @param  {String} containerType
 * @return {Object}
 */
export const getContainersByType = (state, containerType) => pickBy(getContainers(state), ({ type }) => type === containerType);
