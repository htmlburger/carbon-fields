import { put } from 'redux-saga/effects';
import { setUI } from 'containers/actions';

/**
 * Small helper to generate a dummy action that will change the container's visibility.
 *
 * @param  {String}  containerId
 * @param  {Boolean} isVisible
 * @return {Object}
 */
export function stubContainerVisibilityAction(containerId, isVisible) {
	return put(setUI({
		containerId: containerId,
		ui: {
			is_visible: isVisible
		}
	}));
}

/**
 * Generate a dummy object that represents a container.
 *
 * @param  {String} containerType
 * @param  {String} containerId
 * @param  {Object} state
 * @return {Object}
 */
export function stubContainerState(containerType, containerId, state) {
	return {
		id: containerId,
		type: containerType,
		...state
	};
}
