/**
 * The external dependencies.
 */
import { take, call, put } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { createSubmitChannel } from 'lib/events';
import { validateAllContainers, submitForm } from 'containers/actions';

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	const channel = yield call(createSubmitChannel, '.comment-php form#post');

	while (true) {
		const { event } = yield take(channel);

		yield put(submitForm(event));
		yield put(validateAllContainers(event));
	}
}
