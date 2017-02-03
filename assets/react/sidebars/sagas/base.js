/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { kebabCase } from 'lodash';

/**
 * The internal dependencies.
 */
import { addSidebar, receiveSidebar } from 'sidebars/actions';
import { request } from 'sidebars/helpers';

/**
 * Make an AJAX request to create the requested sidebar.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.sidebarName
 * @return {void}
 */
export function* workerAddSidebar({ payload: { sidebarName } }) {
	try {
		yield call(request, 'add', sidebarName);
		yield put(receiveSidebar({
			id: kebabCase(sidebarName),
			name: sidebarName,
		}));
	} catch (e) {
		alert(e);
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeEvery(addSidebar.toString(), workerAddSidebar),
	];
}