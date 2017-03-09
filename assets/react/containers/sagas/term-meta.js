/**
 * The external dependencies.
 */
import ReactDOM from 'react-dom';
import { takeEvery } from 'redux-saga';
import {
	take,
	call,
	put,
	fork,
	select,
	cancel
} from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { resetStore } from 'store/actions';
import { normalizePreloadedState } from 'store/helpers';
import {
	createSelectboxChannel,
	createAjaxChannel,
	createSubmitChannel,
	createClickChannel
} from 'lib/events';

import containerFactory from 'containers/factory';
import { stopSaga } from 'containers/helpers';
import { TYPE_TERM_META } from 'containers/constants';

import {
	getContainers,
	getContainerById,
	canProcessAction
} from 'containers/selectors';

import {
	setupContainer,
	validateAllContainers,
	setMeta,
	setUI
} from 'containers/actions';

import { walkAndEvaluate } from 'containers/conditions';

/**
 * Keep in sync the `level` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncLevel(containerId) {
	const channel = yield call(createSelectboxChannel, 'select#parent');

	try {
		while (true) {
			const { option } = yield take(channel);
			let level = 1;

			if (option.className) {
				const matches = option.className.match(/^level-(\d+)/);

				if (matches) {
					level = parseInt(matches[1], 10) + 2;
				}
			}

			yield put(setMeta({
				containerId,
				meta: {
					term_level: level,
				}
			}));
		}
	} finally {
		channel.close();
	}
}

/**
 * Setup the initial state of the container.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerSetupContainer(action) {
	const { containerId } = action.payload;

	// Don't do anything if the type isn't correct.
	if (!(yield select(canProcessAction, containerId, TYPE_TERM_META))) {
		return;
	}

	yield call(stopSaga, containerId, yield [
		takeEvery(setMeta, workerCheckVisibility),
		fork(workerSyncLevel, containerId),
	]);
}

/**
 * Keep in sync the `is_visible` property.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerCheckVisibility(action) {
	const { containerId } = action.payload;

	// Don't do anything if the type isn't correct.
	if (!(yield select(canProcessAction, containerId, TYPE_TERM_META))) {
		return;
	}

	const container = yield select(getContainerById, containerId);

	yield put(setUI({
		containerId,
		ui: {
			is_visible: walkAndEvaluate(container.conditions, container.meta)
		}
	}));
}

/**
 * Reset the containers when the term is saved.
 *
 * @return {void}
 */
export function* workerReset(store) {
	const channel = yield call(createAjaxChannel, 'ajaxSuccess', 'add-tag');

	while (true) {
		const { settings, data } = yield take(channel);

		// Don't reset when there is no registered containers or in case of error.
		if (!settings.data.includes('carbon_panel') || data.querySelector('wp_error')) {
			continue;
		}

		// Remove the current instances from DOM.
		for (const id in yield select(getContainers)) {
			yield call(
				ReactDOM.unmountComponentAtNode,
				yield call([document, document.querySelector], `.container-${id}`)
			);
		}

		// Get the initial state.
		const state = normalizePreloadedState(window.carbon_json);

		// Replace the store's state.
		yield put(resetStore(state));

		// Render new containers.
		const containers = yield select(getContainers);

		for (const id in containers) {
			yield call(containerFactory, store, containers[id].type, { id });
		}
	}
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
export function* workerFormSubmit(channelCreator, selector) {
	const channel = yield call(channelCreator, selector);

	while (true) {
		const { event } = yield take(channel);

		yield put(validateAllContainers(event));
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman(store) {
	yield [
		takeEvery(setupContainer, workerSetupContainer),
		call(workerReset, store),
		call(workerFormSubmit, createClickChannel, 'form#addtag #submit'),
		call(workerFormSubmit, createSubmitChannel, 'form#edittag'),
	];
}
