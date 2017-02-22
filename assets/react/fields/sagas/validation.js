/**
 * The external dependencies.
 */
import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { isUndefined, isNull } from 'lodash';

/**
 * The internal dependencies.
 */
import { getFieldValidators } from 'lib/registry';

import {
	setupValidation,
	updateField,
	validateFields,
	markFieldAsValid,
	markFieldAsInvalid
} from 'fields/actions';

import { getFieldById } from 'fields/selectors';

/**
 * Validate the field.
 *
 * @param  {Function} validator
 * @param  {String} fieldId
 * @return {String}
 */
export function* validate(validator, fieldId) {
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
	const error = yield call(validator, field);

	// Update the UI.
	if (isNull(error)) {
		yield put(markFieldAsValid(fieldId));
	} else {
		yield put(markFieldAsInvalid(fieldId, error));
	}
}

/**
 * Run the validator when the field's value is updated.
 *
 * @param  {Object} validator
 * @param  {String} fieldId
 * @param  {Object} action
 * @return {void}
 */
export function* workerValidateOnUpdate(validator, fieldId, action) {
	const { payload } = action;

	// Validate only the field specified by the action.
	if (payload.fieldId !== fieldId || isUndefined(payload.data.value)) {
		return;
	}

	// Delay the validation, because in some situations
	// it will trigger unnecessary re-renders.
	if (validator.debounce) {
		yield call(delay, 250);
	}

	// Run the validator.
	yield call(validate, validator.handler, fieldId);
}

/**
 * Run the validator when a mass validation is requested.
 *
 * @param  {Object} validator
 * @param  {String} fieldId
 * @return {void}
 */
export function* workerValidateAll(validator, fieldId) {
	yield call(validate, validator.handler, fieldId);
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

	yield [
		takeLatest(updateField, workerValidateOnUpdate, validator, fieldId),
		takeLatest(validateFields, workerValidateAll, validator, fieldId),
	];
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeEvery(setupValidation, workerSetup),
	];
}
