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
export function createSelectboxChannel(selector) {
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
export function createCheckableChannel(selector) {
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
export function createScrollChannel(selector) {
	return createChannel(selector, 'scroll', (emit, $element) => {
		emit({
			value: $element.scrollTop()
		});
	});
}

/**
 * Create a channel for interaction with the media browser of WordPress.
 *
 * @param  {Object} settings
 * @return {Object}
 */
export function createMediaBrowserChannel(settings) {
	return eventChannel((emit) => {
		// Create a new instance of the media browser.
		const browser = window.wp.media(settings);

		// Emit the selection through the channel.
		const handler = () => {
			emit({
				selection: browser.state().get('selection').toJSON(),
			});
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			browser.off('select', handler);
		};

		// Setup the subscription.
		browser.on('select', handler);

		// Emit the instance of browser so it can be used by subscribers.
		emit({
			browser,
		});

		return unsubscribe;
	}, buffers.fixed(1));
}
