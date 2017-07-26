/**
 * The external dependencies.
 */
import { takeEvery, select, all } from 'redux-saga/effects';
import { isUndefined } from 'lodash';
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
	let eventResult = error;
	$(document).one('carbonFields.validateField', e => {
		eventResult = e.result;
	});
	$(document).trigger('carbonFields.validateField', [fieldHierarchy, error]);

	if ( isUndefined( eventResult ) ) {
		return error;
	}
	return eventResult;
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
