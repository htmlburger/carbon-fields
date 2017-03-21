/**
 * The external dependencies.
 */
import urldecode from 'locutus/php/url/urldecode';
import { takeEvery } from 'redux-saga';
import { call, select, put, take } from 'redux-saga/effects';
import { keyBy, get } from 'lodash';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_WIDGETS, PAGE_NOW_MENUS } from 'lib/constants';

import containerFactory from 'containers/factory';
import { getContainerById } from 'containers/selectors';
import { addContainer, receiveContainer, switchContainerTab, toggleContainerBox } from 'containers/actions';

import { addFields } from 'fields/actions';
import { flattenField } from 'fields/helpers';
import { TYPE_MAP } from 'fields/constants';

/**
 * Prepare the container for inserting in the store.
 *
 * @param  {Object}  store
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.container
 * @param  {Boolean} action.payload.expanded
 * @return {void}
 */
export function* workerReceiveContainer(store, { payload: { container, expanded } }) {
	let fields = [];

	container = urldecode(container);
	container = JSON.parse(container);
	container.fields = container.fields.map(field => flattenField(field, container.id, fields));

	fields = keyBy(fields, 'id');

	yield put(addContainer(container));
	yield put(addFields(fields));

	const { id, type } = container;

	yield call(containerFactory, store, type, { id });
	yield put(toggleContainerBox(id, expanded));
}

/**
 * Add the current tab as hash in URL.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @param  {String} action.payload.tabId
 * @return {void}
 */
export function* workerTabs({ payload: { containerId, tabId }}) {
	const container = yield select(getContainerById, containerId);
	const shouldChangeHash = yield call(get, container, 'ui.tabs_in_url', false);

	if (shouldChangeHash) {
		window.location.hash = `!${tabId}`;
	}
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	const { pagenow } = window;

	yield takeEvery(switchContainerTab, workerTabs);

	if (pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_MENUS) {
		yield takeEvery(receiveContainer, workerReceiveContainer, store);
	}
}
