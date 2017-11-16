/**
 * The external dependencies.
 */
import $ from 'jquery';
import { take, call, put, fork, select } from 'redux-saga/effects';
import { isEmpty, isNull, mapValues, defaultTo, last } from 'lodash';

/**
 * The internal dependencies.
 */
import { ready } from 'lib/actions';
import { getSelectOptionLevel, getSelectOptionAncestors, compactInput } from 'lib/helpers';

import { createClickChannel, createSelectboxChannel, createCheckableChannel, createSubmitChannel, createTextChangeChannel } from 'lib/events';

import { getContainersByType } from 'containers/selectors';
import { validateAllContainers, submitForm, setContainerMeta } from 'containers/actions';
import { TYPE_POST_META } from 'containers/constants';

/**
 * Dispatch the action that will update the store.
 *
 * @param  {Object} containers
 * @param  {Object} meta
 * @return {void}
 */
function* syncStore(containers, meta) {
	yield put(setContainerMeta(mapValues(containers, () => meta)));
}

/**
 * Keep in sync the `post_template` property.
 *
 * @param  {Object} containers
 * @return {void}
 */
export function* workerSyncPostTemplate(containers) {
	const selector = 'select#page_template';
	if ($(selector).length === 0) {
		yield call(syncStore, containers, {
			post_template: 'default',
		});
	}

	const channel = yield call(createSelectboxChannel, selector);

	while (true) {
		const { value } = yield take(channel);

		yield call(syncStore, containers, {
			post_template: value,
		});
	}
}

/**
 * Keep in sync the `post_parent_id`, `post_ancestors` & `post_level` properties.
 *
 * @param  {Object} containers
 * @return {void}
 */
export function* workerSyncPostAncestors(containers) {
	const channel = yield call(createSelectboxChannel, 'select#parent_id');

	while (true) {
		const { option } = yield take(channel);
		const ancestors = getSelectOptionAncestors(option);
		const parentId = isEmpty(ancestors) ? 0 : last(ancestors);
		const level = getSelectOptionLevel(option) + 1; // +1 since the option is for the parent, not the current post

		yield call(syncStore, containers, {
			post_ancestors: ancestors,
			post_parent_id: parentId,
			post_level: level,
		});
	}
}

/**
 * Keep in sync the `post_format` property.
 *
 * @param  {Object} containers
 * @return {void}
 */
export function* workerSyncPostFormat(containers) {
	const channel = yield call(createCheckableChannel, '#post-formats-select');

	while (true) {
		const { values } = yield take(channel);

		yield call(syncStore, containers, {
			post_format: isNull(values[0]) ? '' : values[0],
		});
	}
}

/**
 * Setup the workers for different terms.
 *
 * @param  {Object}   containers
 * @param  {String}   selector
 * @param  {Function} worker
 * @return {void}
 */
function* setupSyncTerms(containers, selector, worker) {
	const elements = document.querySelectorAll(`div[id^="${selector}"]`);

	for (const element of elements) {
		yield fork(worker, containers, element.id.replace(selector, ''));
	}
}

/**
 * Keep in sync the hierarchical terms(e.g categories).
 *
 * @param  {Object} containers
 * @param  {String} taxonomy
 * @return {void}
 */
export function* workerSyncHierarchicalTerms(containers, taxonomy) {
	const channel = yield call(createCheckableChannel, `#${taxonomy}checklist`);

	while (true) {
		const { values } = yield take(channel);

		yield call(syncStore, containers, {
			post_term: {
				[taxonomy]: values.map(value => parseInt(value, 10))
			},
		});
	}
}

/**
 * Keep in sync the non-hierarchical terms(e.g tags).
 *
 * @param  {Object} containers
 * @param  {String} taxonomy
 * @return {void}
 */
export function* workerSyncNonHierarchicalTerms(containers, taxonomy) {
	const channel = yield call(createTextChangeChannel, `#${taxonomy} .the-tags`);

	while (true) {
		const { value } = yield take(channel);

		yield call(syncStore, containers, {
			post_term: {
				[taxonomy]: value ? value.split(/,\s*/) : [],
			},
		});
	}
}

let publishButtonUsed = false;

/**
 * Handle detect specific button used for form submission.
 *
 * @return {void}
 */
export function* workerFormSubmitButton() {
	const channel = yield call(createClickChannel, '#publish[name="publish"]');

	while (true) {
		const { event } = yield take(channel);
		publishButtonUsed = true;
	}
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
export function* workerFormSubmit() {
	const channel = yield call(createSubmitChannel, ':not(.comment-php) form#post');
	const postStatusSelect = document.getElementById(`post_status`);

	while (true) {
		const { event } = yield take(channel);

		yield put(submitForm(event));

		if (!publishButtonUsed && postStatusSelect.value !== 'publish') {
			continue; // do not validate while the user is saving draft (or pending etc.) versions of the post
		}

		publishButtonUsed = false;

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
export default function* foreman() {
	const containers = yield select(getContainersByType, TYPE_POST_META);

	// Nothing to do.
	if (isEmpty(containers)) {
		return;
	}

	// Block and wait for a `READY` event.
	yield take(ready);

	// Start the workers.
	yield fork(workerSyncPostTemplate, containers);
	yield fork(workerSyncPostAncestors, containers);
	yield fork(workerSyncPostFormat, containers);
	yield fork(setupSyncTerms, containers, 'taxonomy-', workerSyncHierarchicalTerms);
	yield fork(setupSyncTerms, containers, 'tagsdiv-', workerSyncNonHierarchicalTerms);
	yield fork(workerFormSubmitButton);
	yield fork(workerFormSubmit);
}
