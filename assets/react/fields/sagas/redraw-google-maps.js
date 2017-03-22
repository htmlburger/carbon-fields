/**
 * The external dependencies.
 */
import { takeEvery, take, select, call, put } from 'redux-saga/effects';
import { filter, find, kebabCase } from 'lodash';

/**
 * The internal dependencies.
 */
import { getContainerById } from 'containers/selectors';
import { toggleContainerBox, switchContainerTab } from 'containers/actions';

import { getFieldsByParent } from 'fields/selectors';
import { receiveComplexGroup, expandComplexGroup, switchComplexTab, redrawMap } from 'fields/actions';
import { TYPE_MAP } from 'fields/constants';

/**
 * Redraw maps when a complex group is added/cloned.
 *
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.groupId
 * @param  {Boolean} action.payload.collapsed
 * @return {void}
 */
export function* workerReceiveComplexGroup({ payload: { group } }) {
	yield call(workerRedraw, yield select(getFieldsByParent, group.id));
}

/**
 * Redraw maps when the complex group is expanded.
 *
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.groupId
 * @param  {Boolean} action.payload.collapsed
 * @return {void}
 */
export function* workerExpandComplexGroup({ payload: { groupId, collapsed } }) {
	if (!collapsed) {
		yield call(workerRedraw, yield select(getFieldsByParent, groupId));
	}
}

/**
 * Redraw maps when the tab of complex field is changed.
 *
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.groupId
 * @return {void}
 */
export function* workerSwitchComplexTab({ payload: { groupId } }) {
	yield call(workerRedraw, yield select(getFieldsByParent, groupId));
}

/**
 * Redraw maps when the container is expanded.
 *
 * @param  {Object}  action
 * @param  {Object}  action.payload
 * @param  {String}  action.payload.containerId
 * @param  {Boolean} action.payload.visible
 * @return {void}
 */
export function* workerToggleContainerBox({ payload: { containerId, visible } }) {
	if (visible) {
		yield call(workerRedraw, yield select(getFieldsByParent, containerId));
	}
}

/**
 * Redraw maps when the container's tab is changed.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @param  {String} action.payload.tabId
 * @return {void}
 */
export function* workerSwitchContainerTab({ payload: { containerId, tabId } }) {
	const container = yield select(getContainerById, containerId);
	const fieldNames = yield call(find, container.settings.tabs, (fields, key) => kebabCase(key) === tabId);

	let fields = yield select(getFieldsByParent, containerId);
	fields = yield call(filter, fields, ({ name }) => fieldNames.indexOf(name) > -1);

	yield call(workerRedraw, fields);
}

/**
 * Redraw the maps.
 *
 * @param  {Object} fields
 * @return {void}
 */
export function* workerRedraw(fields) {
	fields = filter(fields, ['type', TYPE_MAP]);
	fields = filter(fields, ({ ui: { redraw_map }}) => !redraw_map);

	for (const field of fields) {
		yield put(redrawMap(field.id));
	}
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	yield takeEvery(receiveComplexGroup, workerReceiveComplexGroup);
	yield takeEvery(expandComplexGroup, workerExpandComplexGroup);
	yield takeEvery(switchComplexTab, workerSwitchComplexTab);
	yield takeEvery(toggleContainerBox, workerToggleContainerBox);
	yield takeEvery(switchContainerTab, workerSwitchContainerTab);
}
