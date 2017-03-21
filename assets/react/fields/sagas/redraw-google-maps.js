/**
 * The external dependencies.
 */
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { filter } from 'lodash';

/**
 * The internal dependencies.
 */
import { toggleContainerBox } from 'containers/actions';

import { getFieldsByParent } from 'fields/selectors';
import { expandComplexGroup, redrawMap } from 'fields/actions';
import { TYPE_MAP } from 'fields/constants';

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
 * Redraw maps that are in complex groups.
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
 * Redraw the maps.
 *
 * @param  {Object} fields
 * @return {void}
 */
export function* workerRedraw(fields) {
	fields = filter(fields, ['type', TYPE_MAP]);
	fields = filter(fields, ['ui.redraw_map', false]);

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
	yield takeEvery(expandComplexGroup, workerExpandComplexGroup);
	yield takeEvery(toggleContainerBox, workerToggleContainerBox);
}
