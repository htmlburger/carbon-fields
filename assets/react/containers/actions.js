/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Perform the initial setup of the container.
 *
 * @param  {String} containerId
 * @param  {Object} meta
 * @param  {Object} ui
 * @return {Object}
 */
export const setupContainer = createAction('containers/SETUP_CONTAINER', (containerId, meta, ui) => ({ containerId, meta, ui }));

/**
 * Prepare the container for removal.
 *
 * @param  {String} containerId
 * @return {Object}
 */
export const teardownContainer = createAction('containers/TEARDOWN_CONTAINER', containerId => ({ containerId }));

/**
 * Update the object that holds additional fields for the container.
 *
 * @param  {Object} payload
 * @param  {String} payload.containerId
 * @param  {Object} payload.meta
 * @return {Object}
 */
export const setMeta = createAction('containers/SET_META');

/**
 * Update the object that contains information about container's UI.
 *
 * @param  {Object} payload
 * @param  {String} payload.containerId
 * @param  {Object} payload.ui
 * @return {Object}
 */
export const setUI = createAction('containers/SET_UI');

/**
 * Initialize a visibility check for the container.
 *
 * @param  {String} containerId
 * @return {Object}
 */
export const checkVisibility = createAction('containers/CHECK_VISIBILITY');

/**
 * Add a new container to the store.
 *
 * @param  {Object} container
 * @return {Object}
 */
export const addContainer = createAction('containers/ADD_CONTAINER');

/**
 * Remove the container from the store.
 *
 * @param  {Object} containerId
 * @return {Object}
 */
export const removeContainer = createAction('containers/REMOVE_CONTAINER');

/**
 * Receive a container as string and convert it to a usable structure.
 *
 * @param  {String} container
 * @return {Object}
 */
export const receiveContainer = createAction('containers/RECEIVE_CONTAINER');

/**
 * Trigger the validation of all containers.
 *
 * @param  {Object} event
 * @return {Object}
 */
export const validateAllContainers = createAction('containers/VALIDATE_ALL_CONTAINERS');

/**
 * Trigger the validation of the specified container.
 *
 * @param  {String} containerId
 * @param  {Object} event
 * @return {Object}
 */
export const validateContainer = createAction('containers/VALIDATE_CONTAINER', (containerId, event) => ({ containerId, event }));
