/**
 * The external dependencies.
 */
import $ from 'jquery';
import { takeEvery } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';
import { reduce, isEmpty, isArray, camelCase } from 'lodash';

/**
 * The internal dependencies.
 */
import {
	createSelectboxChannel,
	createCheckableChannel,
	createSubmitChannel,
	createTextChangeChannel
} from 'lib/events';

import { PAGE_NOW_PAGE } from 'lib/constants';

import { getContainerById, canProcessAction } from 'containers/selectors';

import {
	setupContainer,
	validateAllContainers,
	setMeta,
	setUI,
	setContainerMeta
} from 'containers/actions';

import { TYPE_POST_META } from 'containers/constants';
import { SETUP_CONTAINER, SET_META } from 'containers/actions';
import { walkAndEvaluate } from 'containers/conditions';

/**
 * Keep in sync the `page_template` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncPageTemplate(containerId) {
	const channel = yield call(createSelectboxChannel, 'select#page_template');

	while (true) {
		const { value } = yield take(channel);

		yield put(setMeta({
			containerId,
			meta: {
				post_template: value,
			}
		}));
	}
}

/**
 * Keep in sync the `parent_id` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncParentId(containerId) {
	const channel = yield call(createSelectboxChannel, 'select#parent_id');

	while (true) {
		let { value, option } = yield take(channel);

		value = parseInt(value, 10);
		value = isNaN(value) ? null : value;

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
				post_parent_id: value,
				post_level: level,
			}
		}));
	}
}

/**
 * Keep in sync the `post_format` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncPostFormat(containerId) {
	const channel = yield call(createCheckableChannel, '#post-formats-select');

	while (true) {
		const { values } = yield take(channel);

		yield put(setMeta({
			containerId,
			meta: {
				post_format: values[0],
			}
		}));
	}
}

export function* setupSyncTerms(containerId, selector, worker) {
	const elements = document.querySelectorAll(`div[id^="${selector}"]`);

	for (const element of elements) {
		yield fork(worker, containerId, element.id.replace(selector, ''));
	}
}

export function* workerSyncHierarchicalTerms(containerId, taxonomy) {
	const channel = yield call(createCheckableChannel, `#${taxonomy}checklist`);

	while (true) {
		const { values } = yield take(channel);

		yield put(setContainerMeta(
			containerId,
			`post_term.${taxonomy}`,
			values.map(value => parseInt(value, 10))
		));
	}
}

export function* workerSyncNonHierarchicalTerms(containerId, taxonomy) {
	const channel = yield call(createTextChangeChannel, `#${taxonomy} .the-tags`);

	while (true) {
		const { value } = yield take(channel);

		yield put(setContainerMeta(
			containerId,
			`post_term.${taxonomy}`,
			value.split(/,\s*/)
		));
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
	if (!(yield select(canProcessAction, containerId, TYPE_POST_META))) {
		return;
	}

	yield fork(workerSyncPageTemplate, containerId);
	yield fork(workerSyncParentId, containerId);
	yield fork(workerSyncPostFormat, containerId);
	yield fork(setupSyncTerms, containerId, 'taxonomy-', workerSyncHierarchicalTerms);
	yield fork(setupSyncTerms, containerId, 'tagsdiv-', workerSyncNonHierarchicalTerms);
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
export function* workerFormSubmit() {
	const channel = yield call(createSubmitChannel, ':not(.comment-php) form#post');

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
export default function* foreman() {
	yield [
		takeEvery(setupContainer, workerSetupContainer),
		call(workerFormSubmit)
	];
}
