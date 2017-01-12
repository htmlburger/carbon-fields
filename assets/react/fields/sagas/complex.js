/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { take, call, put, select } from 'redux-saga/effects';
import { find, merge, keyBy } from 'lodash';

/**
 * The internal dependencies.
 */
import { getFieldById } from 'fields/selectors';
import { addComplexGroupIdentifiers, flattenComplexGroupFields } from 'fields/helpers';
import { updateField, addFields } from 'fields/actions';
import { ADD_COMPLEX_GROUP } from 'fields/actions';

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
	yield put(updateField(payload.id, {
		value: [
			...field.value,
			group,
		]
	}));
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeEvery(ADD_COMPLEX_GROUP, workerAddComplexGroup),
	];
}
