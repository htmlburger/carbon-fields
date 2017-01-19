/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { find, findIndex, merge, keyBy } from 'lodash';

/**
 * The internal dependencies.
 */
import { getAll, getFieldById } from 'fields/selectors';
import { addComplexGroupIdentifiers, flattenComplexGroupFields, restoreField } from 'fields/helpers';
import { addFields, removeFields, updateField, setUI, addComplexGroup, cloneComplexGroup, removeComplexGroup } from 'fields/actions';

/**
 * Prepare a clone or new instance of the specified group.
 *
 * @param  {Object} action
 * @param  {String} action.type
 * @param  {Object} action.payload
 * @param  {String} action.fieldId
 * @param  {String} [action.groupId]
 * @param  {String} [action.groupName]
 * @return {void}
 */
export function* workerAddOrCloneComplexGroup({ type, payload: { fieldId, groupId, groupName } }) {
	const field = yield select(getFieldById, fieldId);
	const isAddAction = type === addComplexGroup.toString();
	const isCloneAction = type === cloneComplexGroup.toString();

	let blueprint, group, fields;

	// Get the group that will be used as starting point.
	if (isAddAction) {
		blueprint = yield call(find, field.groups, { name: groupName });
	} else if (isCloneAction) {
		blueprint = yield call(find, field.value, { id: groupId });
	}

	// Create a safe copy of the group.
	group = yield call(merge, {}, blueprint);

	// Replace the fields' references in the group.
	if (isCloneAction) {
		const all = yield select(getAll);
		group.fields = group.fields.map(field => restoreField(field, all));
	}

	fields = [];

	addComplexGroupIdentifiers(field, group, field.value.length);
	flattenComplexGroupFields(group, fields);

	fields = keyBy(fields, 'id');

	yield put(addFields(fields));
	yield put(updateField(fieldId, {
		value: [
			...field.value,
			group,
		]
	}));

	if (field.ui.is_tabbed) {
		yield put(setUI(fieldId, {
			current_tab: group.id,
		}));
	}
}

/**
 * Get a flat array that contains the ids of the fields in specified tree.
 *
 * @param  {Object[]} roots
 * @param  {Object}   all
 * @param  {String[]} accumulator
 * @return {String[]}
 */
function collectFieldIds(roots, all, accumulator) {
	roots.forEach((field) => {
		accumulator.push(field.id);

		// TODO: Use a constant for the type.
		if (field.type === 'Complex') {
			all[field.id].value.forEach((group) => {
				collectFieldIds(group.fields, all, accumulator);
			});
		}
	});

	return accumulator;
}

/**
 * Prepare the specified complex group for removal.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {String} action.payload.groupId
 * @return {void}
 */
export function* workerRemoveComplexGroup({ payload: { fieldId, groupId } }) {
	const all = yield select(getAll);
	const field = yield select(getFieldById, fieldId);
	const group = yield call(find, field.value, { id: groupId });
	const groupFields = yield call(collectFieldIds, group.fields, all, []);

	if (field.ui.is_tabbed) {
		const groupIndex = yield call(findIndex, field.value, { id: groupId });
		let nextGroupId = null;

		if (field.value.length > 1) {
			if (groupIndex > 0) {
				nextGroupId = field.value[groupIndex - 1].id;
			} else {
				nextGroupId = field.value[1].id;
			}
		}

		yield put(setUI(fieldId, {
			current_tab: nextGroupId
		}));
	}

	yield put(updateField(fieldId, {
		value: field.value.filter(({ id }) => id !== groupId),
	}));

	yield put(removeFields(groupFields));
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeEvery(addComplexGroup.toString(), workerAddOrCloneComplexGroup),
		takeEvery(cloneComplexGroup.toString(), workerAddOrCloneComplexGroup),
		takeEvery(removeComplexGroup.toString(), workerRemoveComplexGroup),
	];
}
