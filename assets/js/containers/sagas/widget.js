/**
 * The external dependencies.
 */
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { startsWith } from 'lodash';
import { delay, buffers } from 'redux-saga';
import { put, call, take, select, fork, all, actionChannel } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_WIDGETS, PAGE_NOW_CUSTOMIZE } from 'lib/constants';
import {
	createWidgetsChannel,
	createAjaxChannel,
	createClickChannel
} from 'lib/events';
import { compactInput } from 'lib/helpers';

import { removeContainer, receiveContainer, validateContainer, submitForm, toggleContainerBox } from 'containers/actions';
import { getContainerById, getContainerDomNodeById } from 'containers/selectors';

import { removeFields, setFieldValue } from 'fields/actions';
import { getFieldById, getFieldsByRoots, hasInvalidFields } from 'fields/selectors';
import { TYPE_MAP } from 'fields/constants';
import { ID_PREFIX } from 'containers/constants';

const carbonWidgetIdPrefix = 'carbon_fields_';

function widgetIdToContainerId(widgetId) {
	return ID_PREFIX + widgetId;
}

function getWidgetId(widget) {
	const widgetId = $(widget)
		.find('[name="widget-id"]')
		.val();
	return widgetId;
}

/**
 * Track the widgets that are being added.
 */
const widgetsToAdd = new Set();

/**
 * Re-init the container when the widget is created/saved.
 *
 * @return {void}
 */
export function* workerAddedOrUpdatedEvent() {
	const { pagenow } = window.carbon_json;
	const channel = yield call(createWidgetsChannel);

	while (true) {
		const { event, widget } = yield take(channel);

		const container = $(widget)
			.find('[data-json]')
				.data('json');

		// We don't care about other widgets.
		if (!container) {
			continue;
		}

		const widgetId = yield call(getWidgetId, widget);

		if (event.type === 'widget-before-added') {
			yield call([widgetsToAdd, 'add'], widgetId);
		}

		yield put(receiveContainer(container, true));

		// WARNING: This piece of code manipulates the core behavior of WordPress Widgets.
		// Some day this code will stop to work and we'll need to find another workaround.
		//
		// * Disable the submit handler since it breaks our validation logic.
		// * Disable live preview mode because we can't detect when the widget is updated/synced.
		// * Show the "Apply" button because it's hidden by the live mode.
		if (pagenow === PAGE_NOW_CUSTOMIZE && event.type === 'widget-added') {
			$(widget)
				.find('[name="savewidget"]')
					.off('click')
					.show()
				.end()
				.find('.widget-content:first')
					.off('keydown', 'input')
					.off('change input propertychange', ':input');

			const widgetInstance = yield call(wp.customize.Widgets.getWidgetFormControlForWidget, widgetId);

			// Change the flag for 'live mode' so we can receive proper `widget-updated` events.
			widgetInstance.liveUpdateMode = false;
		}
	}
}

/**
 * Trigger a generel "change" event on the widget container in order to deal with
 * this requirement as of WP 4.9 (otherwise the save button will not activate)
 *
 * @return {void}
 */
export function* workerTriggerChangeEvent() {
	const updateChannel = yield actionChannel(setFieldValue, buffers.none());

	while (true) {
		const { payload: { fieldId } } = yield take(updateChannel);
		const field = yield select(getFieldById, fieldId);
		const containerDomNode = yield select(getContainerDomNodeById, field.container_id);
		$(containerDomNode).trigger('change');
	}
}

/**
 * We need to remove the container from DOM when the widget
 * is saved because WordPress will throw away everything.
 *
 * @param  {String} ajaxEvent
 * @param  {String} ajaxAction
 * @return {void}
 */
export function* workerDestroyContainer(ajaxEvent, ajaxAction) {
	const channel = yield call(createAjaxChannel, ajaxEvent, ajaxAction);

	while (true) {
		const { settings: { data } } = yield take(channel);
		const widgetId = data.match(/widget-id=(.+?)\&/)[1];
		const containerId = widgetIdToContainerId(widgetId);

		// Don't care about other widgets.
		if (!startsWith(widgetId, carbonWidgetIdPrefix)) {
			continue;
		}

		// Don't remove the container since we just add it.
		if (widgetsToAdd.has(widgetId)) {
			yield call([widgetsToAdd, 'delete'], widgetId);

			continue;
		}

		// Get the container from the store.
		const container = yield select(getContainerById, containerId);

		// We don't have the container in the store when
		// the widget is created for the first time.
		if (!container) {
			continue;
		}

		// Remove the current instance from DOM.
		ReactDOM.unmountComponentAtNode(document.querySelector(`.container-${containerId}`));

		// Get the fields that belongs to the container.
		const fieldsIds = yield select(getFieldsByRoots, container.fields);

		// Remove everything from the store.
		yield put(removeContainer(containerId));
		yield put(removeFields(fieldsIds));
	}
}

/**
 * Handle the form submission.
 *
 * @return {void}
 */
export function* workerFormSubmit() {
	const { pagenow } = window.carbon_json;
	const channel = yield call(createClickChannel, '.widgets-php, .wp-customizer', '[name="savewidget"]');

	while (true) {
		const { event } = yield take(channel);
		const widgetId = getWidgetId($(event.target).closest('.widget-inside').get(0));
		const containerId = widgetIdToContainerId(widgetId);

		// Don't care about other widgets.
		if (!startsWith(widgetId, carbonWidgetIdPrefix)) {
			continue;
		}

		yield put(submitForm(event));
		yield put(validateContainer(containerId, event));
		if (carbonFieldsConfig.compactInput) {
			const container = yield select(getContainerById, containerId);
			const $form = $(event.target).closest('form');
			const fieldNamePrefix = 'widget-' + widgetId.replace(/(.*?)\-(\d+)$/, '$1[$2]');
			const fieldName = fieldNamePrefix + '[' + carbonFieldsConfig.compactInputKey + ']';
			yield compactInput($form.get(0), container, fieldName);
		}

		// The widgets has slightly different behavior on the 'Customize' page.
		// So we need to save the widget manually because we remove the default
		// handler defined here - https://github.com/WordPress/WordPress/blob/master/wp-admin/js/customize-widgets.js#L881-L884.
		if (pagenow === PAGE_NOW_CUSTOMIZE) {
			event.preventDefault();

			// This little delay allows us to get correct results in the selector for invalid fields
			// since we don't know when the validation is completed.
			yield call(delay, 250);

			// Submit the widget.
			if (!(yield select(hasInvalidFields))) {
				const widget = yield call(wp.customize.Widgets.getWidgetFormControlForWidget, widgetId);

				// Call the built-in logic of WordPress to update the widget.
				yield call([widget, widget.updateWidget], { disable_form: true });
			}
		}
	}
}

/**
 * Notify everyone that the widget is expanded or collapsed.
 *
 * @return {void}
 */
export function* workerToggleWidget() {
	const channel = yield call(createClickChannel, '.widget-top');

	while (true) {
		const { event } = yield take(channel);
		const $widget = $(event.target).closest('.widget');
		const widgetId = getWidgetId($widget.get(0));
		const containerId = widgetIdToContainerId(widgetId);

		// Don't care about other widgets.
		if (!startsWith(widgetId, carbonWidgetIdPrefix)) {
			continue;
		}

		// Wait for the animation.
		yield call(delay, 100);
		yield put(toggleContainerBox(containerId, $widget.hasClass('open')));
	}
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	const { pagenow } = window.carbon_json;

	if (pagenow !== PAGE_NOW_WIDGETS && pagenow !== PAGE_NOW_CUSTOMIZE) {
		return;
	}

	const workers = [
		call(workerAddedOrUpdatedEvent),
		call(workerToggleWidget),
		call(workerTriggerChangeEvent),
		call(workerFormSubmit)
	];

	if (pagenow === PAGE_NOW_WIDGETS) {
		workers.push(call(workerDestroyContainer, 'ajaxSend', 'save-widget'));
	}

	if (pagenow === PAGE_NOW_CUSTOMIZE) {
		workers.push(call(workerDestroyContainer, 'ajaxSend', 'update-widget'));
	}

	yield all(workers);
}
