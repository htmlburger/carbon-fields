/* @flow */

import $ from 'jquery';
import { eventChannel, buffers, END } from 'redux-saga';

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
export function createChannel(selector: string, event: string, handler: Function, childSelector: ?string = null): Object {
	return eventChannel((emit) => {
		// Find the element in DOM.
		const $element: JQuery = $(selector);

		// Cancel the subscription.
		const unsubscribe: Function = () => {
			$element.off(event, childSelector, handler);
		};

		// Close the channel since the element doesn't exists.
		if (!$element.length) {
			emit(END);
			return unsubscribe;
		}

		// Setup the subscription.
		$element.on(event, childSelector, (event?: Event) => {
			handler(emit, $element, event);
		});

		// Emit the initial value.
		handler(emit, $element);

		return unsubscribe;
	}, buffers.fixed(1));
}

/**
 * Create a channel that will listen for `change` events on selectbox.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createSelectboxChannel(selector: string): Object {
	return createChannel(selector, 'change', (emit, $element) => {
		emit({
			value: $element.val(),
			option: $element.find(':selected').first().get(0),
		});
	});
}

/**
 * Create a channel that will listen for `change` events on radio/checkbox inputs.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createCheckableChannel(selector: string): Object {
	return createChannel(selector, 'change', (emit, $element) => {
		const elements: HTMLInputElement[] = $element.find('input:checked').get();
		const values: string[] = elements.map(element => element.value);

		emit({
			values,
			elements,
		});
	}, 'input');
}

/**
 * Create a channel that will listen for `scroll` events.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createScrollChannel(selector: string): Object {
	return createChannel(selector, 'scroll', (emit, $element) => {
		emit({
			value: $element.scrollTop()
		});
	});
}
