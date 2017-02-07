/**
 * The external dependencies.
 */
import immutable from 'object-path-immutable';
import { handleActions } from 'redux-actions';
import { omit } from 'lodash';

/**
 * The internal dependencies.
 */
import { decorateFieldReducer } from 'lib/registry';
import { addFields, removeFields, updateField, setUI, updateValue } from 'fields/actions';

/**
 * The reducer that handles the `fields` branch.
 */
export default decorateFieldReducer(handleActions({
	[addFields]: (state, { payload }) => ({ ...state, ...payload }),
	[removeFields]: (state, { payload }) => omit(state, payload),
	[updateField]: (state, { payload: { fieldId, values }}) => immutable.assign(state, fieldId, values),
	[setUI]: (state, { payload: { fieldId, ui }}) => immutable.assign(state, `${fieldId}.ui`, ui),
	[updateValue]: (state, { payload: { fieldId, value }}) => immutable.set(state, `${fieldId}.value`, value),
}, {}));
