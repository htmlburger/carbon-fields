/**
 * The external dependencies.
 */
import $ from 'jquery';
import { put, call, take } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_MENUS } from 'lib/constants';
import { createAjaxSuccessChannel } from 'lib/events';

import { receiveContainer } from 'containers/actions';

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
