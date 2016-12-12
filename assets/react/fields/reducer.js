/* @flow */

import immutable from 'object-path-immutable';
import { SET_VALUE } from 'fields/actions';

/**
 * The reducer that handles manipulation to field's state.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export default function(state: Object = {}, action: ReduxAction): Object {
	switch (action.type) {
		case SET_VALUE: return setValue(state, action);
		default: return state;
	}
}

/**
 * Update the value of the specified field.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function setValue(state: Object, action: ReduxAction): Object {
	const { fieldUuid, value } = action.payload;

	return immutable.set(state, `${fieldUuid}.value`, value);
}
