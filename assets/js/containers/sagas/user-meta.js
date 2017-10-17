/**
 * The external dependencies.
 */
import { isEmpty, mapValues } from 'lodash';
import { take, call, put, fork, select } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { ready } from 'lib/actions';
import { compactInput } from 'lib/helpers';
import { createSelectboxChannel, createSubmitChannel } from 'lib/events';

import { validateAllContainers, submitForm, setContainerMeta } from 'containers/actions';
import { getContainersByType } from 'containers/selectors';
import { TYPE_USER_META } from 'containers/constants';

/**
 * Keep in sync the `user_role` property.
 *
 * @param  {Object} containers
 * @return {void}
 */
export function* workerSyncUserRole(containers) {
	const channel = yield call(createSelectboxChannel, 'select#role');

	try {
		while (true) {
			const { value } = yield take(channel);

			yield put(setContainerMeta(mapValues(containers, () => ({ user_role: value }))));
		}
	} finally {
		// The selectbox is missing on the profile page.
		// So we need to read the role from the container in DOM.
		const el = yield call([document, document.querySelector], `fieldset[data-profile-role]`);

		if (el.dataset.profileRole) {
			// TODO: For some reason we can't use map-like methods because
			// everything dies silently.
			for (const id in containers) {
				containers[id] = {
					user_role: el.dataset.profileRole
				};
			}

			yield put(setContainerMeta(containers));
		}
	}
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

		yield put(submitForm(event));
		yield put(validateAllContainers(event));
		if (carbonFieldsConfig.compactInput) {
			yield compactInput(event.target);
		}
	}
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	const containers = yield select(getContainersByType, TYPE_USER_META);

	// Nothing to do.
	if (isEmpty(containers)) {
		return;
	}

	// Block and wait for a `READY` event.
	yield take(ready);

	// Start the workers.
	yield fork(workerSyncUserRole, containers);
	yield fork(workerFormSubmit);
}
