/* @flow */

import type { ReduxAction } from 'defs';

import immutable from 'object-path-immutable';
import { SET_UI_META } from 'containers/actions';

/**
 * The reducer that handles manipulation to container's state.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export default function(state: Object = {}, action: ReduxAction): Object {
	switch (action.type) {
		case SET_UI_META: return setUIMeta(state, action);
		default: return state;
	}
}

/**
 * Update the UI meta for the specified container.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function setUIMeta(state: Object, action: ReduxAction): Object {
	const { containerId, ui } = action.payload;

	return immutable.assign(state, `${containerId}.ui`, ui);
}
