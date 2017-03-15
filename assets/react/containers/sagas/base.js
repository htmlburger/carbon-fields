/**
 * The external dependencies.
 */
import urldecode from 'locutus/php/url/urldecode';
import { takeEvery } from 'redux-saga';
import { call, select, put, take } from 'redux-saga/effects';
import { keyBy } from 'lodash';

/**
 * The internal dependencies.
 */
import { TYPE_WIDGET } from 'containers/constants';
import { PAGE_NOW_WIDGETS, PAGE_NOW_MENUS } from 'lib/constants';

import containerFactory from 'containers/factory';
import { getContainerById } from 'containers/selectors';

import {
	setupContainer,
	addContainer,
	receiveContainer,
	setUI
} from 'containers/actions';

import { addFields, redrawMap } from 'fields/actions';
import { flattenField } from 'fields/helpers';

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
	yield put(redrawMap(fields, TYPE_WIDGET));

	const { id, type } = container;

	yield call(containerFactory, store, type, { id });
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	const { pagenow } = window;
	const workers = [];

	if (pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_MENUS) {
		workers.push(takeEvery(receiveContainer, workerReceiveContainer, store));
	}

	yield workers;
}
