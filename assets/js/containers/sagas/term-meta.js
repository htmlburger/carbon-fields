/**
 * The external dependencies.
 */
import ReactDOM from 'react-dom';
import { take, call, put, fork, select } from 'redux-saga/effects';
import { isEmpty, mapValues, last, includes } from 'lodash';

/**
 * The internal dependencies.
 */
import { resetStore } from 'store/actions';
import { normalizePreloadedState } from 'store/helpers';
import { getSelectOptionLevel, getSelectOptionAncestors, compactInput } from 'lib/helpers';

import { ready } from 'lib/actions';
import { createSelectboxChannel, createAjaxChannel, createSubmitChannel, createClickChannel } from 'lib/events';

import containerFactory from 'containers/factory';
import { setContainerMeta, validateAllContainers, submitForm } from 'containers/actions';
import { getContainers, getContainersByType } from 'containers/selectors';
import { TYPE_TERM_META, ID_PREFIX } from 'containers/constants';

/**
 * Keep in sync the `term_level` property.
 *
 * @param  {Object} containers
 * @return {void}
 */
export function* workerSyncTermLevel(containers) {
	const channel = yield call(createSelectboxChannel, 'select#parent');

	while (true) {
		const { option } = yield take(channel);
		const level = getSelectOptionLevel(option) + 1; // +1 since the option is for the parent, not the current term
		const payload = mapValues(containers, () => ({ term_level: level }));
		yield put(setContainerMeta(payload));
	}
}

/**
 * Keep in sync the `term_parent_id` and `term_ancestors` properties.
 *
 * @param  {Object} containers
 * @return {void}
 */
export function* workerSyncTermAncestors(containers) {
	const channel = yield call(createSelectboxChannel, 'select#parent');

	while (true) {
		const { option } = yield take(channel);
		const ancestors = getSelectOptionAncestors(option);
		const parentId = isEmpty(ancestors) ? 0 : last(ancestors);

		const payload = mapValues(containers, () => ({
			term_ancestors: ancestors,
			term_parent_id: parentId,
		}));
		yield put(setContainerMeta(payload));
	}
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
		if (!includes(settings.data, ID_PREFIX) || data.querySelector('wp_error')) {
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
export default function* foreman(store) {
	const containers = yield select(getContainersByType, TYPE_TERM_META);

	// Nothing to do.
	if (isEmpty(containers)) {
		return;
	}

	// Block and wait for a `READY` event.
	yield take(ready);

	// Start the workers.
	yield fork(workerSyncTermLevel, containers);
	yield fork(workerSyncTermAncestors, containers);
	yield fork(workerFormSubmit, createClickChannel, 'form#addtag #submit');
	yield fork(workerFormSubmit, createSubmitChannel, 'form#edittag');
	yield fork(workerReset, store);
}
