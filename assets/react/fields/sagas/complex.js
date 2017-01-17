/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { take, call, put, select } from 'redux-saga/effects';
import { find, findIndex, merge, keyBy, reject } from 'lodash';

/**
 * The internal dependencies.
 */
import { getAll, getFieldById } from 'fields/selectors';
import { addComplexGroupIdentifiers, flattenComplexGroupFields } from 'fields/helpers';
import { updateField, addFields, removeFields, setUI } from 'fields/actions';
import { ADD_COMPLEX_GROUP, REMOVE_COMPLEX_GROUP } from 'fields/actions';

/**
 * Prepare the specified complex group for adding.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @return {void}
 */
export function* workerAddComplexGroup({ payload }) {
	const field = yield select(getFieldById, payload.id);
	const blueprint = yield call(find, field.groups, { name: payload.group });
	const group = yield call(merge, {}, blueprint);
	let groupFields = [];

	addComplexGroupIdentifiers(field, group, field.value.length);
	flattenComplexGroupFields(group, groupFields);

	groupFields = keyBy(groupFields, 'id');

	yield put(addFields(groupFields));
	yield put(updateField(field.id, {
		value: [
			...field.value,
			group,
		]
	}));

	if (field.ui.is_tabbed) {
		yield put(setUI(field.id, {
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
 * @return {void}
 */
export function* workerRemoveComplexGroup({ payload }) {
	const all = yield select(getAll);
	const field = yield select(getFieldById, payload.id);
	const group = yield call(find, field.value, { id: payload.group });
	const groupFields = yield call(collectFieldIds, group.fields, all, []);

	if (field.ui.is_tabbed) {
		const groupIndex = yield call(findIndex, field.value, { id: payload.group });
		let nextTabId = null;

		if (field.value.length > 1) {
			if (groupIndex > 0) {
				nextTabId = field.value[groupIndex - 1].id;
			} else {
				nextTabId = field.value[1].id;
			}
		}

		yield put(setUI(field.id, {
			current_tab: nextTabId
		}));
	}

	yield put(updateField(field.id, {
		value: field.value.filter(({ id }) => id !== group.id),
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
		takeEvery(ADD_COMPLEX_GROUP, workerAddComplexGroup),
		takeEvery(REMOVE_COMPLEX_GROUP, workerRemoveComplexGroup),
	];
}
