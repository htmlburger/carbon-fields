/* @flow */

import type { ReduxAction } from 'defs';

import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { getContainerById } from 'containers/selectors';
import { setMeta, setUI } from 'containers/actions';
import { SETUP_CONTAINER, SET_UI } from 'containers/actions';

/**
 * Setup the initial state of the container.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerSetupContainer(action: ReduxAction): any {
	const defaults: Object = {
		'has_error': false,
		'is_dirty': false,
		'is_visible': true,
		'classes': [],
	};

	console.log(action);

	let { containerId, meta, ui } = action.payload;

	ui = {
		...defaults,
		...ui,
	};

	yield put(setMeta({ containerId, meta }));
	yield put(setUI({ containerId, ui }));
}

/**
 * Show or hide the container's metabox.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerToggleMetaBoxVisibility(action: ReduxAction): any {
	const { containerId }: { containerId: string } = action.payload;
	const container: Object = yield select(getContainerById, containerId);
	const el: HTMLElement = yield call([document, document.querySelector], `#${containerId}`);

	if (!el) {
		throw new Error(`Cannot find the metabox for container "${containerId}"`);
	}

	el.style.display = container.ui.is_visible ? 'block' : 'none';
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman(): any {
	yield [
		takeEvery(SETUP_CONTAINER, workerSetupContainer),
		takeEvery(SET_UI, workerToggleMetaBoxVisibility),
	];
}
