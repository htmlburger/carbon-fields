/**
 * The external dependencies.
 */
import $ from 'jquery';
import { eventChannel, buffers, END } from 'redux-saga';
import { isString, uniqueId, isArray } from 'lodash';

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
		event = `${event}.${uniqueId('event-')}`;

		// Find the element in DOM.
		const $element = $(selector);

		// Cancel the subscription.
		const unsubscribe = () => {
			$element.off(event, childSelector);
		};

		// Close the channel since the element doesn't exist.
		if (!$element.length) {
			emit(END);
			return unsubscribe;
		}

		// Setup the subscription.
		$element.onFirst(event, childSelector, (event) => {
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
	return createChannel(selector, 'change', function(emit, $element) {
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
		const elements = $element.find('input:checked').get();
		const values = elements.map(element => element.value);

		emit({
			values,
			elements,
		});
	}, 'input');
}

/**
 * Create a channel that will listen for `change` events on text fields.
 *
 * @param  {String} selector
 * @return {Object}
 */
export function createTextChangeChannel(selector) {
	return createChannel(selector, 'change', (emit, $element) => {
		const value = $element.val();

		emit({
			value,
		});
	});
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
 * Create a channel that will listen for `submit` events.
 *
 * @param  {String} selector
 * @param  {String} [childSelector]
 * @return {Object}
 */
export function createSubmitChannel(selector, childSelector = null) {
	return createChannel(selector, 'submit', (emit, $element, event) => {
		if (event) {
			emit({
				event,
			});
		}
	}, childSelector);
}

/**
 * Create a channel that will listen for `click` events.
 *
 * @param  {String} selector
 * @param  {String} [childSelector]
 * @return {Object}
 */
export function createClickChannel(selector, childSelector = null) {
	return createChannel(selector, 'click', (emit, $element, event) => {
		if (event) {
			emit({
				event,
			});
		}
	}, childSelector);
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

		let AttachmentLibrary = wp.media.view.Attachment.Library;

		window.wp.media.view.Attachment.Library = AttachmentLibrary.extend({
			render: function () {
				let {
					controller: { options: { selected } }
				} = this;

				selected = isArray(selected) ? selected : [ selected ];
				selected = selected.map(id => parseInt(id, 10));

				const {
					id
				} = this.model;

				if (selected && selected.indexOf(id) !== -1) {
					this.$el.addClass('carbon-selected');
				} else {
					this.$el.removeClass('carbon-selected');
				}

				return AttachmentLibrary.prototype.render.apply( this, arguments );
			},
		});

		// Emit the selection through the channel.
		const onSelect = () => {
			emit({
				selection: browser.state().get('selection').toJSON(),
			});
		};

		// Emit the closing modal through the channel.
		const onClose = () => {
			emit({
				closed: true
			});
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			browser.off('select', onSelect);
			browser.off('close', onClose);
			browser.remove();
		};

		// Setup the subscription.
		browser.on('select', onSelect);
		browser.on('close', onClose);

		// Emit the instance of browser so it can be used by subscribers.
		emit({
			browser,
		});

		return unsubscribe;
	}, buffers.fixed(1));
}

/**
 * Create a channel that will intercept all occurences
 * of the specified AJAX action.
 *
 * @param  {String} event
 * @param  {String} action
 * @return {Object}
 */
export function createAjaxChannel(event, action) {
	return eventChannel((emit) => {
		// Emit the AJAX event through the channel.
		const handler = (event, xhr, settings, data) => {
			if (isString(settings.data) && settings.data.indexOf(action) > -1) {
				emit({
					event,
					xhr,
					settings,
					data,
				});
			}
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			$(document).off(event, handler);
		};

		// Setup the subscription.
		$(document).on(event, handler);

		return unsubscribe;
	}, buffers.fixed(1));
}

/**
 * Create a channel that will intercept all `widget-added` & `widget-updated` events
 * from `Widgets` page.
 *
 * @return {Object}
 */
export function createWidgetsChannel() {
	return eventChannel((emit) => {
		// Emit the event through the channel.
		const handler = (event, widget) => {
			emit({
				event,
				widget,
			});
		};

		// Cancel the subscription.
		const unsubscribe = () => {
			$(document).off('widget-before-added widget-added widget-updated', handler);
		};

		// Setup the subscription.
		$(document).on('widget-before-added widget-added widget-updated', handler);

		return unsubscribe;
	}, buffers.fixed(1));
}
