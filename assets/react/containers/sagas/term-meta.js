/* @flow */

import { takeEvery } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

import { createSelectboxChannel } from 'lib/events';
import { getContainerById, canProcessAction } from 'containers/selectors';
import { setMeta, setUI } from 'containers/actions';
import { TYPE_TERM_META } from 'containers/constants';
import { SETUP_CONTAINER, SET_META } from 'containers/actions';

/**
 * Keep in sync the `level` property.
 *
 * @param  {string} containerId
 * @return {void}
 */
export function* workerSyncLevel(containerId: string): any {
	const channel = yield call(createSelectboxChannel, 'select#parent');

	while (true) {
		const { option }: { option: HTMLElement } = yield take(channel);
		let level: number = 1;

		if (option.className) {
			const matches: ?string[] = option.className.match(/^level-(\d+)/);

			if (matches) {
				level = parseInt(matches[1], 10) + 2;
			}
		}

		yield put(setMeta({
			containerId,
			meta: {
				level: level,
			}
		}));
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
	if (!(yield select(canProcessAction, containerId, TYPE_TERM_META))) {
		return;
	}

	yield fork(workerSyncLevel, containerId);
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
	if (!(yield select(canProcessAction, containerId, TYPE_TERM_META))) {
		return;
	}

	const container: Object = yield select(getContainerById, containerId);
	let isVisible: boolean = true;

	if (container.settings.show_on_level && container.meta.level != container.settings.show_on_level) {
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
