/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { call, select, put } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_WIDGETS, PAGE_NOW_MENUS } from 'lib/constants';

import { setupContainer, setUI, setContainerMeta, setMeta } from 'containers/actions';
import { getContainerById } from 'containers/selectors';
import { walkAndEvaluate } from 'containers/conditions';

/**
 * Show/hide the container.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @return {void}
 */
export function* workerToggleVisibility({ payload: { containerId }}) {
	const container = yield select(getContainerById, containerId);
	const el = yield call([document, document.querySelector], `#${containerId}`);

	if (!el) {
		throw new Error(`Could not find the metabox for container "${containerId}".`);
	}

	el.style.display = container.ui.is_visible ? 'block' : 'none';
}

/**
 * Check whether the container should be visible or hidden.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @return {void}
 */
export function* workerCheckVisibility({ payload: { containerId }}) {
	const container = yield select(getContainerById, containerId);

	yield put(setUI({
		containerId,
		ui: {
			is_visible: walkAndEvaluate(container.conditions, container.meta),
		}
	}));
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
		takeEvery(setupContainer, workerToggleVisibility),
		takeEvery(setUI, workerToggleVisibility),
		takeEvery(setMeta, workerCheckVisibility),
		takeEvery(setContainerMeta, workerCheckVisibility),
	];
}
