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
 * Create a Saga Channel that will listen for DOM changes on specified radios/checkboxes.
 * The buffer is used to emit the initial value of the inputs when the channel is created.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createCheckableChannel(selector: string): Object {
	return eventChannel((emit) => {
		const $container: JQuery = $(selector);

		// Emit the value of inputs through the channel.
		const changeHandler: Function = (event?: Event) => {
			const elements: HTMLInputElement[] = $container.find('input:checked').get();
			const values: string[] = elements.map(element => element.value);

			emit({
				values,
				elements,
			});
		};

		// Cancel the subscription.
		const unsubscribe: Function = () => {
			$container.off('change', 'input', changeHandler);
		}

		// Close the channel since the container doesn't exists.
		if (!$container.length) {
			emit(END);
			return unsubscribe;
		}

		// Setup the subscription.
		$container.on('change', 'input', changeHandler);

		// Emit the initial value.
		changeHandler();

		return unsubscribe;
	}, buffers.fixed(1));
}
