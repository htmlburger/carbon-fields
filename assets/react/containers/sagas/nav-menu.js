/**
 * The external dependencies.
 */
import $ from 'jquery';
import { put, call, take, select } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_MENUS } from 'lib/constants';
import { createAjaxSuccessChannel, createSubmitChannel, createClickChannel } from 'lib/events';

import { TYPE_NAV_MENU_ITEM } from 'containers/constants';
import { receiveContainer, validateAllContainers, submitForm } from 'containers/actions';
import { getContainerById } from 'containers/selectors';

import { redrawMap } from 'fields/actions';
import { getFieldById } from 'fields/selectors';

/**
 * Init the container when the menu item is created.
 *
 * @return {void}
 */
export function* workerInit() {
	const channel = yield call(createAjaxSuccessChannel, 'add-menu-item');

	while (true) {
		const { data } = yield take(channel);
		const container = $(data)
			.find('[data-json]')
				.data('json');

		// Close the channel since we don't have any
		// registered containers.
		if (!container) {
			channel.close();
			break;
		}

		yield put(receiveContainer(container));
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
 * Handle menu item expand
 *
 * @return {void}
 */
export function* workerItemExpand() {
	const channel = yield call(createClickChannel, '.item-edit');

	while (true) {
		const { event } = yield take(channel);
		const containerId = $(event.target)
			.closest('.menu-item')
			.find('.carbon-container')
				.data('id');


		if (!containerId) {
			continue;
		}

		const container = yield select(getContainerById, containerId);
		let fields = [];

		for ( let i = 0; i < container.fields.length; i++ ) {
			fields.push(yield select(getFieldById, container.fields[i].id));
		}

		yield put(redrawMap(fields, TYPE_NAV_MENU_ITEM));
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	const { pagenow } = window;

	if (pagenow !== PAGE_NOW_MENUS) {
		return;
	}

	yield [
		call(workerInit),
		call(workerItemExpand),
		call(workerFormSubmit)
	];
}
