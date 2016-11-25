/* @flow */

import $ from 'jquery';
import { takeEvery, eventChannel } from 'redux-saga';
import { take, call, put, select, fork } from 'redux-saga/effects';
import { getContainerById } from 'containers/selectors';
import { setUIMeta } from 'containers/actions';
import { SETUP_CONTAINER } from 'containers/actions';
import { TYPE_POST_META } from 'containers/constants';

/**
 * Create a Channel that will be a bridge between other DOM elements
 * and our React application.
 *
 * @return {Object}
 */
function createPageTemplateChannel(): Object {
	return eventChannel((emit) => {
		const $select = $('select#page_template');

		// Emit the value of selectbox through the channel.
		const changeHandler = (event) => {
			emit({ value: event.target.value });
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			$select.off('change', changeHandler);
		}

		// Setup the subscription.
		$select.on('change', changeHandler);

		return unsubscribe;
	});
}

/**
 * Keep in sync the `page_template` property.
 *
 * @param  {String} containerId
 * @return {void}
 */
export function* workerSyncPageTemplate(containerId: string): any {
	const channel = yield call(createPageTemplateChannel);

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
 * Setup the initial state of the container.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerSetupContainer(action: Object): any {
	const containerId: string = action.payload.containerId;
	const container: Object = yield select(getContainerById, containerId);

	// Don't do anything if the type isn't correct.
	if (!container.type === TYPE_POST_META) {
		return;
	}

	yield fork(workerSyncPageTemplate, containerId);
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
