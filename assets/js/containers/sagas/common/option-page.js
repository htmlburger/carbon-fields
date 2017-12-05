/**
 * The external dependencies.
 */
import $ from 'jquery';
import { isEmpty } from 'lodash';
import { take, call, select, put, fork } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { createScrollChannel, createSubmitChannel } from 'lib/events';
import { compactInput } from 'lib/helpers';
import { getContainersByType } from 'containers/selectors';
import { validateAllContainers, submitForm } from 'containers/actions';

/**
 * Handle the sticky position of the actions panel.
 *
 * @return {void}
 */
export function* workerStickyPanel() {
	const channel = yield call(createScrollChannel, window);
	const $container = $('.carbon-box:first');
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
 * Handle the form submission.
 *
 * @return {void}
 */
export function* workerFormSubmit(formHtmlId) {
	const channel = yield call(createSubmitChannel, `form#${formHtmlId}`);

	while (true) {
		const { event } = yield take(channel);

		yield put(submitForm(event));
		yield put(validateAllContainers(event));
		if (carbonFieldsConfig.compactInput) {
			yield compactInput(event.target);
		}
	}
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store, type, formHtmlId) {
	const containers = yield select(getContainersByType, type);

	// Nothing to do.
	if (isEmpty(containers)) {
		return;
	}

	// Start the workers.
	yield fork(workerStickyPanel);
	yield fork(workerFormSubmit.bind(null, formHtmlId));
}
