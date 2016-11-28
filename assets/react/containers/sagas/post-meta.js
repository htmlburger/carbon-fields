/* @flow */

import { takeEvery } from 'redux-saga';
import { take, call, put, select, fork } from 'redux-saga/effects';
import { setUIMeta } from 'containers/actions';
import { SETUP_CONTAINER } from 'containers/actions';
import { TYPE_POST_META } from 'containers/constants';
import { canProcessAction, createSelectboxChannel } from 'containers/helpers';

/**
 * Keep in sync the `page_template` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncPageTemplate(containerId: string): any {
	const channel = yield call(createSelectboxChannel, 'select#page_template');

	while (true) {
		const { value } = yield take(channel);

		yield put(setUIMeta({
			containerId,
			ui: {
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
export function* workerSyncParentId(containerId: string): any {
	const channel = yield call(createSelectboxChannel, 'select#parent_id');

	while (true) {
		let { value, $option } = yield take(channel);

		value = parseInt(value, 10);
		value = isNaN(value) ? null : value;

		const classes = $option.attr('class');
		const level = classes ? parseInt(classes.match(/^level-(\d+)/)[1], 10) + 2 : 1;

		yield put(setUIMeta({
			containerId,
			ui: {
				parent_id: value,
				level: level,
			}
		}));
	}
}

/**
 * Setup the initial state of the container.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerSetupContainer(action: Object): any {
	const containerId: string = action.payload.containerId;

	// Don't do anything if the type isn't correct.
	if (!(yield call(canProcessAction, containerId, TYPE_POST_META))) {
		return;
	}

	yield fork(workerSyncPageTemplate, containerId);
	yield fork(workerSyncParentId, containerId);
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman(): any {
	yield [
		takeEvery(SETUP_CONTAINER, workerSetupContainer),
	];
}
