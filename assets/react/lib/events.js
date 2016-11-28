/* @flow */

import $ from 'jquery';
import { eventChannel, buffers, END } from 'redux-saga';

/**
 * Create a Saga Channel that will listen for DOM changes on specified selectbox.
 * The buffer is used to emit the initial value of the selectbox when the channel is created.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createSelectboxChannel(selector: string): Object {
	return eventChannel((emit) => {
		const $select: JQuery = $(selector);

		// Emit the value of selectbox through the channel.
		const changeHandler: Function = (event?: Event) => {
			emit({
				value: $select.val(),
				element: $select.get(0),
				option: $select.find(':selected').first().get(0),
			});
		};

		// Cancel the subscription.
		const unsubscribe: Function = () => {
			$select.off('change', changeHandler);
		}

		// Close the channel since the element doesn't exists.
		if (!$select.length) {
			emit(END);
			return unsubscribe;
		}

		// Setup the subscription.
		$select.on('change', changeHandler)

		// Emit the initial value.
		changeHandler();

		return unsubscribe;
	}, buffers.fixed(1));
}

/**
 * Create a Saga Channel that will listen for DOM changes on specified radio buttons.
 * The buffer is used to emit the initial value of the selectbox when the channel is created.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createRadioChannel(selector: string): Object {
	return eventChannel((emit) => {
		const $inputs: JQuery = $(selector);

		// Emit the value of selectbox through the channel.
		const changeHandler: Function = (event?: Event) => {
			if (event && !event.target.checked) {
				return;
			}

			// Use `any` instead of `HTMLInputElement` to avoid conflicts
			// with the `get` method.
			const target: any = $inputs
				.filter(':checked')
				.first()
				.get(0);

			if (target.checked) {
				emit({
					value: target.value,
					element: target,
				});
			}
		};

		// Cancel the subscription.
		const unsubscribe: Function = () => {
			$inputs.off('change', changeHandler);
		}

		// Close the channel since the elements don't exists.
		if (!$inputs.length) {
			emit(END);
			return unsubscribe;
		}

		// Setup the subscription.
		$inputs.on('change', changeHandler)

		// Emit the initial value.
		changeHandler();

		return unsubscribe;
	}, buffers.fixed(1));
}
