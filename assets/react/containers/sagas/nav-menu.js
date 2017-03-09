/**
 * The external dependencies.
 */
import $ from 'jquery';
import { put, call, take } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_MENUS } from 'lib/constants';
import { createAjaxSuccessChannel, createSubmitChannel } from 'lib/events';

import { receiveContainer, validateAllContainers, submitForm } from 'containers/actions';

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
		call(workerFormSubmit),
	];
}
