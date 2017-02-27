/**
 * The external dependencies.
 */
import $ from 'jquery';
import urldecode from 'locutus/php/url/urldecode';
import { takeEvery, takeLatest } from 'redux-saga';
import { call, select, put, take } from 'redux-saga/effects';
import { keyBy, keys } from 'lodash';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_WIDGETS, PAGE_NOW_MENUS } from 'lib/constants';

import containerFactory from 'containers/factory';
import { getContainerById } from 'containers/selectors';

import {
	setupContainer,
	addContainer,
	receiveContainer,
	validateAllContainers,
	validateContainer,
	setUI
} from 'containers/actions';

import {
	addFields,
	validateField,
	markFieldAsInvalid
} from 'fields/actions';

import { getAllFields, getFieldsByRoots } from 'fields/selectors';
import { flattenField } from 'fields/helpers';

/**
 * Show or hide the container's metabox.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerToggleMetaBoxVisibility(action) {
	const { containerId } = action.payload;
	const container = yield select(getContainerById, containerId);
	const el = yield call([document, document.querySelector], `#${containerId}`);

	if (!el) {
		throw new Error(`Cannot find the metabox for container "${containerId}"`);
	}

	el.style.display = container.ui.is_visible ? 'block' : 'none';
}

/**
 * Prepare the container for inserting in the store.
 *
 * @param  {Object} store
 * @param  {Object} action
 * @param  {String} action.payload
 * @return {void}
 */
export function* workerReceiveContainer(store, { payload }) {
	let container = payload;
	let fields = [];

	container = urldecode(container);
	container = JSON.parse(container);
	container.fields = container.fields.map(field => flattenField(field, container.id, fields));

	fields = keyBy(fields, 'id');

	yield put(addContainer(container));
	yield put(addFields(fields));

	const { id, type } = container;

	yield call(containerFactory, store, type, { id });
}

/**
 * Validate the container(s).
 *
 * @param  {String[]} fieldIds
 * @param  {Object}   event
 * @return {void}
 */
export function* workerValidate(fieldIds, event) {
	const $target = $(event.currentTarget);
	const $spinner = $('#publishing-action .spinner', $target);
	const $error = $('.carbon-error-required strong');

	$spinner.addClass('is-active');

	for (const fieldId of fieldIds) {
		yield put(validateField(fieldId));
	}

	// Block and wait for an invalid field. In case we don't receive
	// such action the worker will be canceled and the process will continue.
	const invalidAction = yield take(markFieldAsInvalid);

	event.preventDefault();

	// Prevent execution of WordPress's validation.
	event.stopImmediatePropagation();

	$spinner.removeClass('is-active');

	if ($error.length) {
		$error.text(carbonFieldsL10n.container.pleaseFillTheRequiredFields);
	} else {
		const html = `
			<div class="settings-error error hidden below-h2 carbon-error-required">
				<p>
					<strong>${carbonFieldsL10n.container.pleaseFillTheRequiredFields}</strong>
				</p>
			</div>
		`;

		$(html)
			.insertAfter('#wpbody-content > .wrap > h2')
			.slideDown();
	}
}

/**
 * Validate the specified container.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerValidateContainer(action) {
	const { containerId, event } = action.payload;
	const container = yield select(getContainerById, containerId);
	const fieldIds = yield select(getFieldsByRoots, container.fields);

	yield call(workerValidate, fieldIds, event);
}

/**
 * Validate all containers.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workervalidateAllContainers(action) {
	const fields = yield select(getAllFields);
	const fieldIds = yield call(keys, fields);

	yield call(workerValidate, fieldIds, action.payload);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	const { pagenow } = window;
	const workers = [
		takeLatest(validateAllContainers, workervalidateAllContainers),
		takeEvery(validateContainer, workerValidateContainer),
	];

	if (pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_MENUS) {
		workers.push(takeEvery(receiveContainer, workerReceiveContainer, store));
	}

	if (pagenow !== PAGE_NOW_WIDGETS && pagenow !== PAGE_NOW_MENUS) {
		workers.push(takeEvery(setupContainer, workerToggleMetaBoxVisibility));
		workers.push(takeEvery(setUI, workerToggleMetaBoxVisibility));
	}

	yield workers;
}
