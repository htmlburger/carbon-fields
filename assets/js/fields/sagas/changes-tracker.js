/**
 * The external dependencies.
 */
import { buffers } from 'redux-saga';
import { take, takeLatest, actionChannel } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { setFieldValue, markFieldAsInvalid } from 'fields/actions';
import { submitForm } from 'containers/actions';

/**
 * [triggerWarning description]
 *
 * @param  {Object} event
 */
function triggerWarning(event) {
	const dialogText = 'Changes that you made may not be saved.';

	event.returnValue = dialogText;
	return dialogText;
}

/**
 * Proxy for attaching/detaching the warning
 *
 * @param  {Bool} isAttached
 * @return {void}
 */
function shouldAttachWarning(isAttached) {
	if (isAttached) {
		detachWarning();
	} else {
		attachWarning();
	}
}

/**
 * Attach warning
 *
 * @return {void}
 */
function attachWarning() {
	window.addEventListener('beforeunload', triggerWarning);
}

/**
 * Detach warning
 *
 * @return {void}
 */
function detachWarning() {
	window.removeEventListener('beforeunload', triggerWarning);
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	const updateChannel = yield actionChannel(setFieldValue, buffers.none());
	let isAttached = false;

	while (true) {
		const action = yield take(updateChannel);

		if (!action.meta.dirty) {
			continue;
		}

		shouldAttachWarning(isAttached);
		isAttached = !isAttached;

		break;
	}

	yield takeLatest(markFieldAsInvalid, () => {
		if (isAttached) {
			return;
		}

		shouldAttachWarning(isAttached);
		isAttached = !isAttached;
	});

	yield takeLatest(submitForm, () => {
		if (!isAttached) {
			return;
		}

		shouldAttachWarning(isAttached);
		isAttached = !isAttached;
	});
}
