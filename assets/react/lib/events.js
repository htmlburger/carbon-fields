/* @flow */

import $ from 'jquery';
import { eventChannel, buffers, END } from 'redux-saga';

/**
 * Create a Saga Channel that will listen for DOM changes on specified selectbox.
 * The buffer is used to emit the initial value of the selectbox when the channel is created.
 *
 * @param  {string} selector
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
 * @param  {string} selector
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

/**
 * Create a Saga Channel that will listen for DOM events.
 * The buffer is used to emit the initial value of the inputs when the channel is created.
 *
 * @param  {String}   selector
 * @param  {String}   event
 * @param  {Function} handler
 * @param  {String}   [childSelector]
 * @return {Object}
 */
export function createChannel(selector, event, handler, childSelector = null) {
	return eventChannel((emit) => {
		// Find the element in DOM.
		const $element = $(selector);

		// Cancel the subscription.
		const unsubscribe = () => {
			$element.off(event, childSelector, handler);
		};

		// Close the channel since the element doesn't exists.
		if (!$element.length) {
			emit(END);
			return unsubscribe;
		}

		// Setup the subscription.
		$element.on(event, childSelector, (event) => {
			handler(emit, $element, event);
		});

		// Emit the initial value.
		handler(emit, $element);

		return unsubscribe;
	}, buffers.fixed(1));
}

/**
 * Create a channel that will listen for scroll events.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createScrollChannel(selector) {
	return createChannel(selector, 'scroll', (emit, $element) => {
		emit({
			value: $element.scrollTop()
		});
	});
}
