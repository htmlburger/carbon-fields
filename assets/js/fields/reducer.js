/**
 * The external dependencies.
 */
import immutable from 'object-path-immutable';
import { handleActions, combineActions } from 'redux-actions';
import { omit, findIndex, isUndefined } from 'lodash';

/**
 * The internal dependencies.
 */
import { TYPE_COMPLEX } from 'fields/constants';
import { decorateFieldReducer } from 'lib/registry';
import { resetStore } from 'store/actions';
import {
	setupField,
	updateField,
	setFieldValue,
	addFields,
	removeFields,
	setUI,
	markFieldAsValid,
	markFieldAsInvalid,
	enableComplexGroupType,
	disableComplexGroupType,
	expandComplexGroup,
	collapseComplexGroup,
	switchComplexTab
} from 'fields/actions';
import { getFieldHierarchyById } from 'fields/selectors';

/**
 * The reducer that handles the `fields` branch.
 */
export default decorateFieldReducer(handleActions({
	[combineActions(setupField, setUI)]:  (state, { payload: { fieldId, ui }}) => immutable.assign(state, `${fieldId}.ui`, ui),

	[addFields]: (state, { payload }) => ({ ...state, ...payload }),

	[removeFields]: (state, { payload }) => omit(state, payload),

	[updateField]: (state, { payload: { fieldId, data }}) => immutable.assign(state, fieldId, data),

	[setFieldValue]: (state, { payload: { fieldId, value, method }}) => immutable[method](state, `${fieldId}.value`, value),

	[resetStore]: (state, { payload: { fields }}) => fields,

	[markFieldAsValid]: (state, { payload: { fieldId } }) => immutable.assign(state, `${fieldId}.ui`, {
		valid: true,
		error: null,
	}),

	[markFieldAsInvalid]: (state, { payload: { fieldId, error } }) => immutable.assign(state, `${fieldId}.ui`, {
		valid: false,
		error: error,
	}),

	[enableComplexGroupType]: (state, { payload: { fieldId, groupName } }) => {
		const index = findIndex(state[fieldId].enabledGroupTypes, groupName);

		return immutable.push(state, `${fieldId}.enabledGroupTypes`, groupName);
	},

	[disableComplexGroupType]: (state, { payload: { fieldId, groupName } }) => {
		const index = findIndex(state[fieldId].enabledGroupTypes, g => groupName === g);

		return immutable.del(state, `${fieldId}.enabledGroupTypes.${index}`);
	},

	[combineActions(expandComplexGroup, collapseComplexGroup)]: (state, { payload: { fieldId, groupId, collapsed } }) => {
		const index = findIndex(state[fieldId].value, { id: groupId });

		return immutable.set(state, `${fieldId}.value.${index}.collapsed`, collapsed);
	},

	[switchComplexTab]: (state, { payload: { fieldId, groupId } }) => immutable.set(state, `${fieldId}.ui.current_tab`, groupId),
}, {}));
