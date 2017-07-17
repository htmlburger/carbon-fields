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
 * Raise field validation event.
 *
 * @param  {Object} field
 * @param  {String} error
 * @return {String}
 */
export function* userValidateField(fieldId, error) {
	const fieldHierarchy = yield select(getFieldHierarchyById, fieldId);
	return yield new Promise((resolve, reject) => {
		$(document).one('carbonFields.validateField', e => {
			resolve(e.result);
		});
		const result = $(document).trigger('carbonFields.validateField', [fieldHierarchy, error]);
	});
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(setFieldValue, workerRaiseFieldUpdatedApiEvent),
	]);
}
