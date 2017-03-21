/**
 * The external dependencies.
 */
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { startsWith } from 'lodash';
import { delay } from 'redux-saga';
import { put, call, take, select, fork } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_WIDGETS } from 'lib/constants';
import {
	createWidgetsChannel,
	createAjaxChannel,
	createClickChannel
} from 'lib/events';

import { removeContainer, receiveContainer, validateContainer, submitForm, toggleContainerBox } from 'containers/actions';
import { getContainerById } from 'containers/selectors';

import { removeFields } from 'fields/actions';
import { getFieldById, getFieldsByRoots } from 'fields/selectors';
import { TYPE_MAP } from 'fields/constants';

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

		yield put(receiveContainer(container, true));
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
 * Handle the form submission.
 *
 * @return {void}
 */
export function* workerFormSubmit() {
	const channel = yield call(createClickChannel, '.widgets-php', '[name="savewidget"]');

	while (true) {
		const { event } = yield take(channel);
		const containerId = $(event.target)
			.closest('form')
			.find('input[name="widget-id"]')
				.val();

		yield put(submitForm(event));
		yield put(validateContainer(containerId, event));
	}
}

/**
 * Notify everyone that the widget is expanded or collapsed.
 *
 * @return {void}
 */
export function* workerToggleWidget() {
	const channel = yield call(createClickChannel, '.widget-top');

	while (true) {
		const { event } = yield take(channel);
		const $widget = $(event.target).closest('.widget');
		const containerId = $widget
			.find('input[name="widget-id"]')
				.val();

		// Don't care about other widgets.
		if (!startsWith(containerId, 'carbon')) {
			continue;
		}

		// Wait for the animation.
		yield call(delay, 100);
		yield put(toggleContainerBox(containerId, $widget.hasClass('open')));
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
		call(workerUpdate),
		call(workerCleanup),
		call(workerToggleWidget),
		call(workerFormSubmit)
	];
}
