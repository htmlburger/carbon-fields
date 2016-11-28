/* @flow */

import type { ReduxAction } from 'defs';

import immutable from 'object-path-immutable';
import { SET_META, SET_UI } from 'containers/actions';

/**
 * The reducer that handles manipulation to container's state.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export default function(state: Object = {}, action: ReduxAction): Object {
	switch (action.type) {
		case SET_META: return setMeta(state, action);
		case SET_UI: return setUI(state, action);
		default: return state;
	}
}

/**
 * Update the meta fields for the specified container.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function setMeta(state: Object, action: ReduxAction): Object {
	const { containerId, meta } = action.payload;

	return immutable.assign(state, `${containerId}.meta`, meta);
}

/**
 * Update the UI fields for the specified container.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function setUI(state: Object, action: ReduxAction): Object {
	const { containerId, ui } = action.payload;

	return immutable.assign(state, `${containerId}.ui`, ui);
}
