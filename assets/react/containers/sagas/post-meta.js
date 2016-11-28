/* @flow */

import type { ReduxAction } from 'defs';

import { takeEvery } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';
import { createSelectboxChannel, createCheckableChannel } from 'lib/events';
import { canProcessAction } from 'containers/helpers';
import { getContainerById } from 'containers/selectors';
import { setUIMeta } from 'containers/actions';
import { SETUP_CONTAINER } from 'containers/actions';
import { TYPE_POST_META } from 'containers/constants';

/**
 * Keep in sync the `page_template` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncPageTemplate(containerId: string): any {
	const channel = yield call(createSelectboxChannel, 'select#page_template');

	while (true) {
		const { value }: { value: string } = yield take(channel);

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
		let { value, option }: { value: any, option: HTMLElement } = yield take(channel);

		value = parseInt(value, 10);
		value = isNaN(value) ? null : value;

		let level: number = 1;

		if (option.className) {
			const matches: ?string[] = option.className.match(/^level-(\d+)/);

			if (matches) {
				level = parseInt(matches[1], 10) + 2;
			}
		}

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
 * Keep in sync the `post_format` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncPostFormat(containerId: string): any {
	const channel = yield call(createCheckableChannel, '#post-formats-select');

	while (true) {
		const { values }: { values: string[] } = yield take(channel);

		yield put(setUIMeta({
			containerId,
			ui: {
				post_format: values[0],
			}
		}));
	}
}

/**
 * Keep in sync the `terms` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncTerms(containerId: string): any {
	const container = yield select(getContainerById, containerId);
	const channel = yield call(createCheckableChannel, `#${container.settings.show_on.tax_slug}checklist`);

	while (true) {
		let { values } = yield take(channel);

		values = values.map(value => parseInt(value, 10));

		yield put(setUIMeta({
			containerId,
			ui: {
				terms: values,
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
export function* workerSetupContainer(action: ReduxAction): any {
	const { containerId }: { containerId: string } = action.payload;

	// Don't do anything if the type isn't correct.
	if (!(yield call(canProcessAction, containerId, TYPE_POST_META))) {
		return;
	}

	yield fork(workerSyncPageTemplate, containerId);
	yield fork(workerSyncParentId, containerId);
	yield fork(workerSyncPostFormat, containerId);
	yield fork(workerSyncTerms, containerId);
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
