/**
 * The external dependencies.
 */
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import urldecode from 'locutus/php/url/urldecode';
import { keyBy } from 'lodash';
import { Provider } from 'react-redux';
import { put, call, take } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import store from 'store';

import { TYPE_NOW_MENUS } from 'lib/constants';
import { createAjaxSuccessChannel } from 'lib/events';

import containerFactory from 'containers/factory';
import { addContainer } from 'containers/actions';

import { addFields } from 'fields/actions';
import { flattenField } from 'fields/helpers';

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	if (window.pagenow !== TYPE_NOW_MENUS) {
		return;
	}

	const channel = yield call(createAjaxSuccessChannel, 'add-menu-item');

	try {
		while (true) {
			const { data } = yield take(channel);
			let fields = [];
			let container;

			container = $(data)
				.find('[data-json]')
					.data('json');

			container = urldecode(container);
			container = JSON.parse(container);
			container.fields = container.fields.map(field => flattenField(field, container.id, fields));

			fields = keyBy(fields, 'id');

			yield put(addContainer(container));
			yield put(addFields(fields));

			const { id, type } = container;

			// TODO: Refactor this, because we shouldn't access the store directly.
			containerFactory(store, type, { id });
		}
	} catch (e) {
		// Close the channel since we don't have any
		// registered containers.
		channel.close();
	}
}
