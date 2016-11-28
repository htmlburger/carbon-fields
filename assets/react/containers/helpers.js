/* @flow */

import $ from 'jquery';
import { eventChannel, buffers } from 'redux-saga';

import store from 'store';
import { getContainerById } from 'containers/selectors';

/**
 * Check whether the action can be processed.
 *
 * @param  {String} containerId
 * @param  {String} containerType
 * @param  {Object} state
 * @return {Boolean}
 */
export function canProcessAction(containerId: string, containerType: string, state: Object = store.getState()): boolean {
	return getContainerById(state, containerId).type === containerType;
}

/**
 * Create a Saga Channel that will listen for DOM changes on specified selectbox.
 * The buffer is used to emit the initial value of the selectbox when the channel is created.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createSelectboxChannel(selector: string): Object {
	return eventChannel((emit) => {
		const $select = $(selector);

		// Emit the value of selectbox through the channel.
		const changeHandler = (event) => {
			emit({
				value: $select.val(),
				$option: $select.find(':selected').first(),
			});
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			$select.off('change', changeHandler);
		}

		// Setup the subscription.
		$select.on('change', changeHandler)

		// Emit the initial value.
		changeHandler();

		return unsubscribe;
	}, buffers.fixed(1));
}
