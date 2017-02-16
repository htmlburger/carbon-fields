/**
 * The external dependencies.
 */
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { startsWith } from 'lodash';
import { put, call, take, select } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_WIDGETS } from 'lib/constants';
import { createWidgetsChannel, createAjaxChannel } from 'lib/events';

import { removeContainer, receiveContainer } from 'containers/actions';
import { getContainerById } from 'containers/selectors';

import { removeFields } from 'fields/actions';
import { getFieldsByRoots } from 'fields/selectors';

/**
 * Re-init the container when the widget is created/saved.
 *
 * @return {void}
 */
export function* workerUpdate() {
	const channel = yield call(createWidgetsChannel);

	while (true) {
		const { widget } = yield take(channel);
		const container = $(widget)
			.find('[data-json]')
				.data('json');

		// Don't care about other widgets.
		if (!container) {
			continue;
		}

		yield put(receiveContainer(container));
	}
}

/**
 * We need to remove the container from DOM when the widget
 * is saved because WordPress will throw away everything.
 *
 * @return {void}
 */
export function* workerCleanup() {
	const channel = yield call(createAjaxChannel, 'ajaxSend', 'save-widget');

	while (true) {
		const { settings: { data } } = yield take(channel);
		const containerId = data.match(/widget-id=(.+?)\&/)[1];

		// Don't care about other widgets.
		if (!startsWith(containerId, 'carbon')) {
			continue;
		}

		// Remove the current instance from DOM.
		ReactDOM.unmountComponentAtNode(document.querySelector(`[class*="${containerId}"]`));

		// Get the container from the store.
		const container = yield select(getContainerById, containerId);

		// We don't have the container in the store when
		// the widget is created for the first time.
		if (!container) {
			continue;
		}

		// Get the fields that belongs to the container.
		const fieldsIds = yield select(getFieldsByRoots, container.fields);

		// Remove everything from the store.
		yield put(removeContainer(containerId));
		yield put(removeFields(fieldsIds));
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	const { pagenow } = window;

	if (pagenow !== PAGE_NOW_WIDGETS) {
		return;
	}

	yield [
		workerUpdate,
		workerCleanup
	];
}
