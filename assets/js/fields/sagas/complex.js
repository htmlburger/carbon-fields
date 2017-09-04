/**
 * The external dependencies.
 */
import { take, takeEvery, takeLatest, call, put, select, all } from 'redux-saga/effects';
import { find, findIndex, merge, keyBy } from 'lodash';

/**
 * The internal dependencies.
 */
import { getFields, getFieldById, isFieldTabbed } from 'fields/selectors';

import {
	addComplexGroupIdentifiers,
	flattenComplexGroupFields,
	restoreField
} from 'fields/helpers';

import {
	addFields,
	removeFields,
	setFieldValue,
	addComplexGroup,
	cloneComplexGroup,
	removeComplexGroup,
	receiveComplexGroup,
	switchComplexTab,
	enableComplexGroupType,
	disableComplexGroupType,
	expandComplexGroup,
	startComplexGroupDrag,
	stopComplexGroupDrag,
	setUI
} from 'fields/actions';

import { TYPE_COMPLEX } from 'fields/constants';

/**
 * Prepare a clone or a new instance of the specified group.
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
	const isTabbed = yield select(isFieldTabbed, fieldId);
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
		const all = yield select(getFields);
		group.fields = group.fields.map(field => restoreField(field, all));
	}

	fields = [];

	addComplexGroupIdentifiers(field, group, field.value.length);
	flattenComplexGroupFields(group, fields);

	fields = keyBy(fields, 'id');

	yield put(addFields(fields));
	yield put(setFieldValue(fieldId, group, 'push'));
	yield put(receiveComplexGroup(fieldId, group));

	if (isTabbed) {
		yield put(switchComplexTab(fieldId, group.id));
	} else {
		yield put(expandComplexGroup(fieldId, group.id));
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

		if (field.type === TYPE_COMPLEX) {
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
export function* workerRemoveComplexGroup({ payload: { fieldId, groupId, method } }) {
	const all = yield select(getFields);
	const field = yield select(getFieldById, fieldId);
	const group = yield call(find, field.value, { id: groupId });
	const groupFields = yield call(collectFieldIds, group.fields, all, []);
	const isTabbed = yield select(isFieldTabbed, fieldId);

	if (isTabbed) {
		const groupIndex = yield call(findIndex, field.value, { id: groupId });
		let nextGroupId = null;

		if (field.value.length > 1) {
			if (groupIndex > 0) {
				nextGroupId = field.value[groupIndex - 1].id;
			} else {
				nextGroupId = field.value[1].id;
			}
		}

		yield put(switchComplexTab(fieldId, nextGroupId));
	}

	yield put(setFieldValue(fieldId, field.value.filter(({ id }) => id !== groupId)));

	yield put(removeFields(groupFields));
}

/**
 * Update available list of groups if needed
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {String} action.payload.groupId
 * @return {void}
 */
export function* workerDuplicateComplexGroups({ type, payload: { fieldId, groupId, groupName, method } }) {
	const field = yield select(getFieldById, fieldId);
	if (field.duplicate_groups_allowed) {
		return;
	}
	switch (type) {
		case addComplexGroup.toString():
			yield put(disableComplexGroupType(fieldId, groupName));
			break;

		case cloneComplexGroup.toString():
			const groupCloned = yield call(find, field.value, { id: groupId });
			yield put(disableComplexGroupType(fieldId, groupCloned.name));
			break;

		case removeComplexGroup.toString():
			const groupRemoved = yield call(find, field.value, { id: groupId });
			yield put(enableComplexGroupType(fieldId, groupRemoved.name));
			break;
	}
}

/**
 * Change the `dragged` flag of rich text fields.
 *
 * @param  {NodeList} elements
 * @param  {Boolean}  dragged
 * @return {void}
 */
function* markRichTextFieldsAsDragged(elements, dragged) {
	for (const element of elements) {
		yield put(setUI(element.id, { dragged }));
	}
}

/**
 * Destroy and re-init the editors inside the complex group.
 *
 * @param  {Object}    action
 * @param  {Object}    action.payload
 * @param  {String}    action.payload.groupId
 * @return {void}
 */
export function* workerToggleRichTextEditors({ payload: { groupId } }) {
	// Get all rich text fields by DOM query because it's
	// much easier than using a selector function.
	const elements = yield call([document, 'querySelectorAll'], `#${groupId} .carbon-rich_text textarea`);

	// Destroy all TinyMCE instances inside this group.
	yield call(markRichTextFieldsAsDragged, elements, true);

	// Block and wait until the sorting is done.
	yield take(stopComplexGroupDrag);

	// Re-initialize the TinyMCE instances.
	yield call(markRichTextFieldsAsDragged, elements, false);
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(addComplexGroup, workerDuplicateComplexGroups),
		takeEvery(cloneComplexGroup, workerDuplicateComplexGroups),
		takeEvery(removeComplexGroup, workerDuplicateComplexGroups),

		takeEvery(addComplexGroup, workerAddOrCloneComplexGroup),
		takeEvery(cloneComplexGroup, workerAddOrCloneComplexGroup),
		takeEvery(removeComplexGroup, workerRemoveComplexGroup),

		takeLatest(startComplexGroupDrag, workerToggleRichTextEditors),
	]);
}
