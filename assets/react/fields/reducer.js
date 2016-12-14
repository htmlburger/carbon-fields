/* @flow */

import immutable from 'object-path-immutable';
import { UPDATE_FIELD, SET_UI } from 'fields/actions';

/**
 * The reducer that handles manipulation to field's state.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export default function(state: Object = {}, { type, payload }: ReduxAction): Object {
	switch (type) {
		case UPDATE_FIELD:
			return immutable.assign(state, payload.fieldId, payload.values);
		case SET_UI:
			return immutable.assign(state, `${payload.id}.ui`, payload.ui);
		default:
			return state;
	}
}
