/**
 * The external dependencies.
 */
import $ from 'jquery';
import { delay } from 'redux-saga';
import { put, call, take, select, all } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_MENUS } from 'lib/constants';
import { createAjaxChannel, createSubmitChannel, createClickChannel } from 'lib/events';

import { receiveContainer, validateAllContainers, submitForm, toggleContainerBox } from 'containers/actions';
import { getContainerById } from 'containers/selectors';

import { getFieldById } from 'fields/selectors';
import { TYPE_MAP } from 'fields/constants';

/**
 * Init the container when the menu item is created.
 *
 * @return {void}
 */
export function* workerInit() {
	const channel = yield call(createAjaxChannel, 'ajaxSuccess', 'add-menu-item');

	while (true) {
		const { data } = yield take(channel);
		const $containers = $(data).find('[data-json]');

		// Close the channel since we don't have any
		// registered containers.
		if ($containers.length < 1) {
			channel.close();
			break;
		}

		for (let i = 0; i < $containers.length; i++) {
			let $container = $($containers[i]);
			yield put(receiveContainer($container.data('json'), false));
		}
	}
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
export function* workerFormSubmit() {
	const channel = yield call(createSubmitChannel, 'form#update-nav-menu');

	while (true) {
		const { event } = yield take(channel);

		yield put(submitForm(event));
		yield put(validateAllContainers(event));
	}
}

/**
 * Notify everyone that the item is expanded or collapsed.
 *
 * @return {void}
 */
export function* workerItemExpand() {
	const channel = yield call(createClickChannel, '#menu-to-edit', '.item-edit');

	while (true) {
		const { event } = yield take(channel);
		const $item = $(event.target).closest('.menu-item');
		const containerId = $item
			.find('.carbon-container')
				.data('id');

		if (!containerId) {
			continue;
		}

		yield call(delay, 100);
		yield put(toggleContainerBox(containerId, $item.hasClass('menu-item-edit-active')));
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	const { pagenow } = window.carbon_json;

	if (pagenow !== PAGE_NOW_MENUS) {
		return;
	}

	yield all([
		call(workerInit),
		call(workerItemExpand),
		call(workerFormSubmit)
	]);
}
