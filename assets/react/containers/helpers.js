/* @flow */

import store from 'store';
import { getContainerById } from 'containers/selectors';

/**
 * Check whether the action can be processed.
 *
 * @param  {String} containerId
 * @param  {String} containerType
 * @param  {Object} state
 * @return {Boolean}
 */
export function canProcessAction(containerId: string, containerType: string, state: Object = store.getState()): boolean {
	return getContainerById(state, containerId).type === containerType;
}
