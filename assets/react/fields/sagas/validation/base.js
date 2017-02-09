/**
 * The external dependencies.
 */
import { takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { updateField, setUI } from 'fields/actions';
import { getFieldById } from 'fields/selectors';

/**
 * Handle the validation logic.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.fieldId
 * @return {void}
 */
export function* workerValidate({ payload: { fieldId, data } }) {
	// Debounce the validation, because in some situations
	// will trigger unnecessary re-renders.
	yield call(delay, 200);

	const field = yield select(getFieldById, fieldId);

	// Don't do anything.
	if (!field.required) {
		return;
	}

	yield put(setUI(field.id, {
		has_error: !field.value,
	}));
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeLatest(updateField, workerValidate),
	];
}
