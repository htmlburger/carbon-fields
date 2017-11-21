/**
 * The external dependencies.
 */
import { filter, pickBy } from 'lodash';
import $ from 'jquery';

/**
 * Get all containers.
 *
 * @param  {Object} state
 * @return {Object}
 */
export const getContainers = (state) => state.containers;

/**
 * Get a container by id.
 *
 * @param  {Object} state
 * @param  {String} containerId
 * @return {Object}
 */
export const getContainerById = (state, containerId) => state.containers[containerId];

/**
 * Get all containers by type.
 *
 * @param  {Object} state
 * @param  {String} containerType
 * @return {Object}
 */
export const getContainersByType = (state, containerType) => pickBy(getContainers(state), ({ type }) => type === containerType);

/**
 * Get all visible containers.
 *
 * @param  {Object} state
 * @return {Object}
 */
export const getVisibleContainers = state => filter(getContainers(state), container => container.ui.is_visible);

/**
 * Get a container dom node by id.
 *
 * @param  {Object} state
 * @param  {String} containerId
 * @return {Object}
 */
export const getContainerDomNodeById = (state, containerId) => $(`.carbon-container-${containerId}:first`).get(0);
