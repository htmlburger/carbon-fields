/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';
import { isString } from 'lodash';

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
 * Prepare the payload of the actions that update the container's meta or UI.
 *
 * @param  {String|Object} containers
 * @param  {String} 	   [key]
 * @param  {mixed}  	   [value]
 * @return {Object}
 */
function setMetaOrUI(containers, key, value) {
	if (isString(containers)) {
		return {
			[containers]: {
				[key]: value
			}
		};
	}

	return containers;
}

export const setContainerMeta = createAction('containers/SET_META', setMetaOrUI);
export const setContainerUI = createAction('containers/SET_UI', setMetaOrUI);

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
 * @param  {String}  container
 * @param  {Boolean} expanded
 * @return {Object}
 */
export const receiveContainer = createAction('containers/RECEIVE_CONTAINER', (container, expanded = false) => ({ container, expanded }));

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

/**
 * Notify for form submit in a container
 *
 * @param  {Object} event
 */
export const submitForm = createAction('containers/SUBMIT_FORM', (event) => ({ event }));

/**
 * Show the specified tab.
 *
 * @param  {String} containerId
 * @param  {String} tabId
 * @return {Object}
 */
export const switchContainerTab = createAction('containers/SWITCH_TAB', (containerId, tabId) => ({ containerId, tabId }));

/**
 * Notify when the container is toggled.
 *
 * @param  {String}  containerId
 * @param  {Boolean} visible
 * @return {Object}
 */
export const toggleContainerBox = createAction('containers/TOGGLE_BOX', (containerId, visible) => ({ containerId, visible }));
