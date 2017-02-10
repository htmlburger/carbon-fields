/**
 * The external dependencies.
 */
import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { isUndefined, isEmpty } from 'lodash';

/**
 * The internal dependencies.
 */
import { setupValidation, updateField, setUI } from 'fields/actions';
import { getFieldById } from 'fields/selectors';
import { VALIDATION_BASE } from 'fields/constants';

/**
 * Handle the validation logic for most of the fields.
 *
 * @param  {Object}      action
 * @param  {Object}      action.payload
 * @param  {Object}      action.payload.data
 * @param  {mixed}       action.payload.data.value
 * @return {String|null}
 */
export function baseValidation({ payload: { data: { value }} }) {
	if (isEmpty(value)) {
		return crbl10n.message_required_field;
	}

	return null;
}

/**
 * A proxy handler that will debounce the validation process.
 *
 * @param  {Function} validator
 * @param  {String}   fieldId
 * @param  {Object}   action
 * @return {void}
 */
export function* workerValidate(validator, fieldId, action) {
	const { payload } = action;

	if (fieldId !== action.payload.fieldId || isUndefined(payload.data.value)) {
		return;
	}

	const field = yield select(getFieldById, fieldId);

	// We don't care about hidden inputs.
	if (!field.ui.is_visible) {
		// Reset the validation status.
		if (!field.ui.valid) {
			yield put(setUI(field.id, {
				valid: true,
				error: null,
			}));
		}

		return;
	}

	// Debounce the validation, because in some situations
	// will trigger unnecessary re-renders.
	yield call(delay, 200);

	// Perform the validation.
	const result = yield call(validator, action);

	yield put(setUI(field.id, {
		valid: isEmpty(result) ? true : false,
		error: result,
	}));
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
	const validators = {
		[VALIDATION_BASE]: baseValidation,
	};

	const validator = validators[validationType];

	if (!validator) {
		throw new Error(`Unknown validation type '${validationType}' for field '${fieldId}'.`);
	}

	yield takeLatest(updateField, workerValidate, validator, fieldId);
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
