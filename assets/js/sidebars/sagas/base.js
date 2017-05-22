/**
 * The external dependencies.
 */
import { takeEvery, put, call, all } from 'redux-saga/effects';

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
		var response = yield call(request, 'add', sidebarName);
		yield put(receiveSidebar({
			id: response.data.id,
			name: response.data.name,
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
	yield all([
		takeEvery(addSidebar, workerAddSidebar),
	]);
}
