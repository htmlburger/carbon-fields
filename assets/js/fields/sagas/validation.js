/**
 * The external dependencies.
 */
import { delay } from 'redux-saga';
import { takeEvery, takeLatest, put, call, select, take, all } from 'redux-saga/effects';
import { isUndefined, isNull } from 'lodash';

/**
 * The internal dependencies.
 */
import { getFieldValidators } from 'lib/registry';

import {
	setupValidation,
	setFieldValue,
	validateField,
	markFieldAsValid,
	markFieldAsInvalid,
	teardownField
} from 'fields/actions';

import { getFieldById } from 'fields/selectors';
import { stopSaga } from 'fields/helpers';
import { userValidateField } from 'fields/sagas/api';

/**
 * Determine when the action should be handled by the current handler.
 *
 * @param  {Object}  action
 * @param  {String}  fieldId
 * @return {Boolean}
 */
export function shouldValidate(action, fieldId) {
	const { payload } = action;

	if (payload.fieldId !== fieldId) {
		return false;
	}

	return true;
}

/**
 * Run the validator.
 *
 * @param  {Function} validator
 * @param  {String}   fieldId
 * @param  {Boolean}  debounce
 * @param  {Object}   action
 * @return {void}
 */
export function* workerValidate(validator, fieldId, debounce, action) {
	if (!shouldValidate(action, fieldId)) {
		return;
	}

	// Delay the validation, because in some situations
	// it will trigger unnecessary re-renders.
	if (debounce) {
		yield call(delay, 250);
	}

	const field = yield select(getFieldById, fieldId);
	const { is_visible, valid } = field.ui;

	// We don't care about the hidden inputs.
	if (!is_visible) {
		// Reset the validation status.
		if (!valid) {
			yield put(markFieldAsValid(field.id));
		}

		return;
	}

	// Perform the validation.
	let error = yield call(validator, field);
	error = yield call(userValidateField, fieldId, error);

	// Update the UI.
	if (isNull(error)) {
		yield put(markFieldAsValid(fieldId));
	} else {
		yield put(markFieldAsInvalid(fieldId, error));
	}
}

/**
 * Handle setup of the validation logic.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @param  {String} action.payload.validationType
 * @return {void}
 */
export function* workerSetup({ payload: { fieldId, validationType }}) {
	const validators = yield call(getFieldValidators);
	const validator = validators[validationType];

	if (!validator) {
		throw new Error(`Unknown validation type '${validationType}' for field '${fieldId}'.`);
	}

	yield call(stopSaga, fieldId, yield all([
		takeLatest(setFieldValue, workerValidate, validator.handler, fieldId, validator.debounce),
		takeEvery(validateField, workerValidate, validator.handler, fieldId, false),
	]));
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(setupValidation, workerSetup),
	]);
}
