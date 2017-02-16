/**
 * The external dependencies.
 */
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import urldecode from 'locutus/php/url/urldecode';
import { keyBy, startsWith } from 'lodash';
import { Provider } from 'react-redux';
import { put, call, take, fork, select } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { TYPE_NOW_WIDGETS } from 'lib/constants';
import { createWidgetsChannel, createAjaxChannel } from 'lib/events';

import containerFactory from 'containers/factory';
import { addContainer, removeContainer } from 'containers/actions';
import { getContainerById } from 'containers/selectors';

import { addFields, removeFields } from 'fields/actions';
import { getFieldsByRoots } from 'fields/selectors';
import { flattenField } from 'fields/helpers';

/**
 * Re-init the container when the widget is created/saved.
 *
 * @param  {Object} store
 * @return {void}
 */
export function* workerUpdate(store) {
	const channel = yield call(createWidgetsChannel);

	while (true) {
		const { widget } = yield take(channel);
		let container = $(widget)
			.find('[data-json]')
				.data('json');

		// Don't care about other widgets.
		if (!container) {
			continue;
		}

		// Convert the container to usable data structure.
		container = urldecode(container);
		container = JSON.parse(container);

		// Prepare the fields to be inserted in the store.
		let fields = [];

		container.fields = container.fields.map(field => flattenField(field, container.id, fields));
		fields = keyBy(fields, 'id');

		yield put(addContainer(container));
		yield put(addFields(fields));

		// Re-render the container.
		const { id, type } = container;

		containerFactory(store, type, { id });
	}
}

/**
 * We need to remove the container from DOM when the widget
 * is saved because WordPress will throw away everything.
 *
 * @param  {Object} store
 * @return {void}
 */
export function* workerCleanup(store) {
	const channel = yield call(createAjaxChannel, 'ajaxSend', 'save-widget');

	while (true) {
		const { settings: { data } } = yield take(channel);
		const containerId = data.match(/widget-id=(.+?)\&/)[1];

		// Don't care about other widgets.
		if (!startsWith(containerId, 'carbon')) {
			continue;
		}

		// Remove the current instance from DOM.
		ReactDOM.unmountComponentAtNode(document.querySelector(`[class*="${containerId}"]`));

		// Get the container from the store.
		const container = yield select(getContainerById, containerId);

		// We don't have the container in the store when
		// the widget is created for the first time.
		if (!container) {
			continue;
		}

		// Get the fields that belongs to the container.
		const fieldsIds = yield select(getFieldsByRoots, container.fields);

		// Remove everything from the store.
		yield put(removeContainer(containerId));
		yield put(removeFields(fieldsIds));
	}
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	if (window.pagenow !== TYPE_NOW_WIDGETS) {
		return;
	}

	yield fork(workerUpdate, store);
	yield fork(workerCleanup, store);
}
