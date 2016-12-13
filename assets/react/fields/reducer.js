/* @flow */

import immutable from 'object-path-immutable';
import { SET_VALUE, UPDATE_FIELD } from 'fields/actions';

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
		case UPDATE_FIELD: return updateField(state, action);
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
	const { fieldId, value } = action.payload;

	return immutable.set(state, `${fieldId}.value`, value);
}

/**
 * Update the specified field.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function updateField(state: Object, action: ReduxAction): Object {
	const { fieldId, values } = action.payload;

	return immutable.assign(state, fieldId, values);
}
