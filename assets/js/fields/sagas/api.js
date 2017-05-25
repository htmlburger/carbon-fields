/**
 * The external dependencies.
 */
import { takeEvery, takeLatest, delay, put, call, select, take, all } from 'redux-saga/effects';
import $ from 'jquery';

/**
 * The internal dependencies.
 */
import { setFieldValue } from 'fields/actions';
import { getFieldHierarchyById } from 'fields/selectors';

/**
 * Handle setup of the event raising logic.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {String} action.payload.value
 * @return {void}
 */
export function* workerRaiseFieldUpdatedApiEvent({ payload: { fieldId, value }}) {
	const fieldHierarchy = yield select(getFieldHierarchyById, fieldId);
	$(document).trigger('carbonFields.fieldUpdated', [fieldHierarchy]);
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(setFieldValue, workerRaiseFieldUpdatedApiEvent)
	]);
}
