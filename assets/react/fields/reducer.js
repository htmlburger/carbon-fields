import immutable from 'object-path-immutable';
import { decorateFieldReducer } from 'lib/registry';
import { ADD_FIELDS, UPDATE_FIELD, SET_UI } from 'fields/actions';

/**
 * The reducer that handles manipulation to field's state.
 *
 * @param  {Object} [state]
 * @param  {Object} [action]
 * @return {Object}
 */
function reducer(state = {}, { type, payload } = {}) {
	switch (type) {
		case ADD_FIELDS:
			return { ...state, ...payload };
		case UPDATE_FIELD:
			return immutable.assign(state, payload.id, payload.values);
		case SET_UI:
			return immutable.assign(state, `${payload.id}.ui`, payload.ui);
		default:
			return state;
	}
}

export default decorateFieldReducer(reducer);
