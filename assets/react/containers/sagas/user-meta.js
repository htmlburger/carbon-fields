/* @flow */

import { isEmpty } from 'lodash';
import { takeEvery } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

import { createSelectboxChannel } from 'lib/events';
import { getContainerById, canProcessAction } from 'containers/selectors';
import { setMeta, setUI } from 'containers/actions';
import { TYPE_USER_META } from 'containers/constants';
import { SETUP_CONTAINER, SET_META } from 'containers/actions';

/**
 * Keep in sync the `role` property.
 *
 * @param  {string} containerId
 * @return {void}
 */
export function* workerSyncRole(containerId: string): any {
	const channel = yield call(createSelectboxChannel, 'select#role');

	try {
		while (true) {
			const { value }: { value: string } = yield take(channel);

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
		const el: HTMLElement = yield call([document, document.querySelector], `#${containerId}`);

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
export function* workerSetupContainer(action: ReduxAction): any {
	const { containerId }: { containerId: string } = action.payload;

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
export function* workerCheckVisibility(action: ReduxAction): any {
	const { containerId }: { containerId: string } = action.payload;

	// Don't do anything if the type isn't correct.
	if (!(yield select(canProcessAction, containerId, TYPE_USER_META))) {
		return;
	}

	const container: Object = yield select(getContainerById, containerId);
	let isVisible: boolean = true;

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
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman(): any {
	yield [
		takeEvery(SETUP_CONTAINER, workerSetupContainer),
		takeEvery(SET_META, workerCheckVisibility),
	];
}
