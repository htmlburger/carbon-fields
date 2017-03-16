/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { call, select, put } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_WIDGETS, PAGE_NOW_MENUS } from 'lib/constants';

import { setupContainer, setContainerMeta, setContainerUI } from 'containers/actions';
import { getContainers, getContainerById } from 'containers/selectors';
import { evaluteConditions } from 'containers/conditions';

/**
 * Show or hide the container.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* toggleVisibility(containerId) {
	const container = yield select(getContainerById, containerId);
	const el = yield call([document, document.querySelector], `#${containerId}`);

	if (!el) {
		throw new Error(`Could not find the metabox for container "${containerId}".`);
	}

	el.style.display = container.ui.is_visible ? 'block' : 'none';
}

/**
 * Setup the initial visibility of the container.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @return {void}
 */
export function* workerSetupVisibility({ payload: { containerId } }) {
	yield call(toggleVisibility, containerId);
}

/**
 * Show/hide the containers.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @return {void}
 */
export function* workerToggleVisibility({ payload }) {
	for (const id in payload) {
		yield call(toggleVisibility, id);
	}
}

/**
 * Check whether the container should be visible or hidden.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @return {void}
 */
export function* workerCheckVisibility({ payload }) {
	const containers = yield select(getContainers);

	for (const id in payload) {
		const container = containers[id];

		payload[id] = {
			is_visible: evaluteConditions(container.conditions, container.meta),
		};
	}

	yield put(setContainerUI(payload));
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	const { pagenow } = window;

	if (pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_MENUS) {
		return;
	}

	yield [
		takeEvery(setupContainer, workerSetupVisibility),
		takeEvery(setContainerUI, workerToggleVisibility),
		takeEvery(setContainerMeta, workerCheckVisibility),
	];
}
