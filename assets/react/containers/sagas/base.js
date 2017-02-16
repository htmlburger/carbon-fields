/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { call, select } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { TYPE_NOW_WIDGETS, TYPE_NOW_MENUS } from 'lib/constants';
import { getContainerById } from 'containers/selectors';
import { setupContainer, setUI } from 'containers/actions';

/**
 * Show or hide the container's metabox.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerToggleMetaBoxVisibility(action) {
	const { containerId } = action.payload;
	const container = yield select(getContainerById, containerId);
	const el = yield call([document, document.querySelector], `#${containerId}`);

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
export default function* foreman() {
	const { pagenow } = window;

	// We don't need this functionality on "Widgets" or "Menus" pages.
	if (pagenow === TYPE_NOW_WIDGETS || pagenow === TYPE_NOW_MENUS) {
		return;
	}

	yield [
		takeEvery(setupContainer, workerToggleMetaBoxVisibility),
		takeEvery(setUI, workerToggleMetaBoxVisibility),
	];
}
