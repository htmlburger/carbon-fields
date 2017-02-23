/**
 * The external dependencies.
 */
import { isEmpty } from 'lodash';
import { takeEvery } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { createSelectboxChannel, createSubmitChannel } from 'lib/events';

import { getContainerById, canProcessAction } from 'containers/selectors';
import { setupContainer, validateContainers, setMeta, setUI } from 'containers/actions';
import { TYPE_USER_META } from 'containers/constants';

/**
 * Keep in sync the `role` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncRole(containerId) {
	const channel = yield call(createSelectboxChannel, 'select#role');

	try {
		while (true) {
			const { value } = yield take(channel);

			yield put(setMeta({
				containerId,
				meta: {
					role: value,
				}
			}));
		}
	} finally {
		// The selectbox is missing on the profile page.
		// So we need to read the role from the container in DOM.
		const el = yield call([document, document.querySelector], `#${containerId}`);

		if (el.dataset.profileRole) {
			yield put(setMeta({
				containerId,
				meta: {
					role: el.dataset.profileRole,
				}
			}));
		}
	}
}

/**
 * Setup the initial state of the container.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerSetupContainer(action) {
	const { containerId } = action.payload;

	// Don't do anything if the type isn't correct.
	if (!(yield select(canProcessAction, containerId, TYPE_USER_META))) {
		return;
	}

	yield fork(workerSyncRole, containerId);
}

/**
 * Keep in sync the `is_visible` property.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerCheckVisibility(action) {
	const { containerId } = action.payload;

	// Don't do anything if the type isn't correct.
	if (!(yield select(canProcessAction, containerId, TYPE_USER_META))) {
		return;
	}

	const container = yield select(getContainerById, containerId);
	let isVisible = true;

	if (!isEmpty(container.settings.show_on.role) && container.settings.show_on.role.indexOf(container.meta.role) === -1) {
		isVisible = false;
	}

	yield put(setUI({
		containerId,
		ui: {
			is_visible: isVisible
		}
	}));
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
export function* workerFormSubmit() {
	const channel = yield call(createSubmitChannel, 'form#your-profile, form#createuser');

	while (true) {
		const { event } = yield take(channel);

		yield put(validateContainers(event));
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeEvery(setupContainer, workerSetupContainer),
		takeEvery(setMeta, workerCheckVisibility),
		call(workerFormSubmit),
	];
}
