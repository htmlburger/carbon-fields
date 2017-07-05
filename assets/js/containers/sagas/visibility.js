/**
 * The external dependencies.
 */
import $ from 'jquery';
import { takeEvery, call, select, put, take, all } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { createClickChannel } from 'lib/events';
import { PAGE_NOW_WIDGETS, PAGE_NOW_CUSTOMIZE, PAGE_NOW_MENUS } from 'lib/constants';

import { setupContainer, setContainerMeta, setContainerUI, toggleContainerBox } from 'containers/actions';
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
	const fieldset = yield call([document, document.querySelector], `#${containerId} fieldset`);

	if (!el) {
		throw new Error(`Could not find the metabox for container "${containerId}".`);
	}

	el.style.display  = container.ui.is_visible ? 'block' : 'none';
	fieldset.disabled = !container.ui.is_visible;
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
 * Notify everyone that the container is expanded or collapsed.
 *
 * @return {void}
 */
export function* workerTogglePostBox() {
	const channel = yield call(createClickChannel, '#normal-sortables', '.carbon-box button.handlediv');

	while (true) {
		const { event } = yield take(channel);
		const $container = $(event.target).closest('.carbon-box');

		yield put(toggleContainerBox($container[0].id, !$container.hasClass('closed')));
	}
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	const { pagenow } = window.carbon_json;

	if (pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_CUSTOMIZE || pagenow === PAGE_NOW_MENUS) {
		return;
	}

	yield all([
		takeEvery(setupContainer, workerSetupVisibility),
		takeEvery(setContainerUI, workerToggleVisibility),
		takeEvery(setContainerMeta, workerCheckVisibility),
		call(workerTogglePostBox),
	]);
}
