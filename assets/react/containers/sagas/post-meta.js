import { takeEvery } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';
import { reduce, isEmpty, isArray, camelCase } from 'lodash';

import { createSelectboxChannel, createCheckableChannel } from 'lib/events';
import { TYPE_NOW_PAGE } from 'lib/constants';

import { getContainerById, canProcessAction } from 'containers/selectors';
import { setMeta, setUI } from 'containers/actions';
import { TYPE_POST_META } from 'containers/constants';
import { SETUP_CONTAINER, SET_META } from 'containers/actions';

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
				page_template: value,
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
				parent_id: value,
				level: level,
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

/**
 * Keep in sync the `terms` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncTerms(containerId) {
	const container = yield select(getContainerById, containerId);
	const channel = yield call(createCheckableChannel, `#${container.settings.show_on.tax_slug}checklist`);

	while (true) {
		let { values } = yield take(channel);

		values = values.map(value => parseInt(value, 10));

		yield put(setMeta({
			containerId,
			meta: {
				terms: values,
			}
		}));
	}
}

/**
 * Check whether the container should be visible.
 *
 * @param  {Boolean} isVisible
 * @param  {Object}  settings
 * @param  {Object}  meta
 * @return {Boolean}
 */
function checkTemplateNames(isVisible, settings, meta) {
	const { page_template } = meta;
	const { typenow } = window;

	if (typenow === TYPE_NOW_PAGE && settings.template_names.indexOf(page_template) === -1) {
		isVisible = false;
	}

	return isVisible;
}

/**
 * Check whether the container should be visible.
 *
 * @param  {Boolean} isVisible
 * @param  {Object}  settings
 * @param  {Object}  meta
 * @return {Boolean}
 */
function checkNotInTemplateNames(isVisible, settings, meta) {
	const { page_template } = meta;
	const { typenow } = window;

	if (typenow === TYPE_NOW_PAGE && settings.not_in_template_names.indexOf(page_template) !== -1) {
		isVisible = false;
	}

	return isVisible;
}

/**
 * Check whether the container should be visible.
 *
 * @param  {Boolean} isVisible
 * @param  {Object}  settings
 * @param  {Object}  meta
 * @return {Boolean}
 */
function checkParentPageId(isVisible, settings, meta) {
	const { parent_id } = meta;

	if (parent_id != settings.parent_page_id) {
		isVisible = false;
	}

	return isVisible;
}

/**
 * Check whether the container should be visible.
 *
 * @param  {Boolean} isVisible
 * @param  {Object}  settings
 * @param  {Object}  meta
 * @return {Boolean}
 */
function checkLevelLimit(isVisible, settings, meta) {
	const { level } = meta;

	if (level != settings.level_limit) {
		isVisible = false;
	}

	return isVisible;
}

/**
 * Check whether the container should be visible.
 *
 * @param  {Boolean} isVisible
 * @param  {Object}  settings
 * @param  {Object}  meta
 * @return {Boolean}
 */
function checkPostFormats(isVisible, settings, meta) {
	const { post_format } = meta;

	if (settings.post_formats.indexOf(post_format) === -1) {
		isVisible = false;
	}

	return isVisible;
}

/**
 * Check whether the container should be visible.
 *
 * @param  {Boolean} isVisible
 * @param  {Object}  settings
 * @param  {Object}  meta
 * @return {Boolean}
 */
function checkTaxSlug(isVisible, settings, meta) {
	const { tax_term_id } = meta;

	if (meta.terms.indexOf(tax_term_id) === -1) {
		isVisible = false;
	}

	return isVisible;
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
	yield fork(workerSyncTerms, containerId);
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
	if (!(yield select(canProcessAction, containerId, TYPE_POST_META))) {
		return;
	}

	const container = yield select(getContainerById, containerId);
	const checkers = {
		checkTemplateNames,
		checkNotInTemplateNames,
		checkParentPageId,
		checkLevelLimit,
		checkPostFormats,
		checkTaxSlug,
	};

	const isVisible = reduce(container.settings.show_on, (isVisible, value, key) => {
		const checker = camelCase(`check_${key}`);

		if (checkers[checker]) {
			if (!value || (isArray(value) && isEmpty(value))) {
				return isVisible;
			}

			isVisible = checkers[checker](isVisible, container.settings.show_on, container.meta);
		}

		return isVisible;
	}, true);

	yield put(setUI({
		containerId,
		ui: {
			is_visible: isVisible
		}
	}));
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeEvery(SETUP_CONTAINER, workerSetupContainer),
		takeEvery(SET_META, workerCheckVisibility),
	];
}
