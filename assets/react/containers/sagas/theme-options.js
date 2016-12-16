import $ from 'jquery';
import { takeEvery } from 'redux-saga';
import { take, call, select } from 'redux-saga/effects';

import { createScrollChannel } from 'lib/events';
import { canProcessAction } from 'containers/selectors';
import { TYPE_THEME_OPTIONS } from 'containers/constants';
import { SETUP_CONTAINER } from 'containers/actions';

/**
 * Handle the sticky position of the actions panel.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerStickyActionsPanel(action) {
	const { containerId } = action.payload;

	// Don't do anything if the type isn't correct.
	if (!(yield select(canProcessAction, containerId, TYPE_THEME_OPTIONS))) {
		return;
	}

	const channel = yield call(createScrollChannel, window);
	const $container = $(`#${containerId}`);
	const $panel = $('#postbox-container-1');
	const $bar = $('#wpadminbar');

	while (true) {
		const { value } = yield take(channel);
		const offset = $bar.height() + 10;
		const threshold = $container.offset().top - offset;

		// In some situations the threshold is negative number because
		// the container element isn't rendered yet.
		if (threshold > 0) {
			$panel
				.toggleClass('fixed', value >= threshold)
				.css('top', offset);
		}
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeEvery(SETUP_CONTAINER, workerStickyActionsPanel),
	];
}
