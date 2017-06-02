/**
 * The external dependencies.
 */
import $ from 'jquery';
import { takeEvery, takeLatest, call, select, put, take, all } from 'redux-saga/effects';
import { keys } from 'lodash';

/**
 * The internal dependencies.
 */
import { validateContainer, validateAllContainers } from 'containers/actions';
import { getContainerById } from 'containers/selectors';

import { validateField, markFieldAsInvalid } from 'fields/actions';
import { getFields, getFieldsByRoots, hasInvalidFields } from 'fields/selectors';

/**
 * Validate the fields.
 *
 * @param  {String[]} fieldIds
 * @param  {Object}   event
 * @return {void}
 */
export function* validate(fieldIds, event) {
	const $target = $(event.currentTarget);
	const $spinner = $('#publishing-action .spinner', $target);
	const $error = $('.carbon-error-required strong');

	$spinner.addClass('is-active');

	// Validate each one of the fields.
	for (const fieldId of fieldIds) {
		yield put(validateField(fieldId));
	}

	// Block and wait for an invalid field. In case we don't receive
	// such action the worker will be canceled and the process will continue.
	if (!(yield select(hasInvalidFields))) {
		yield take(markFieldAsInvalid);
	}

	// Cancel the action and prevent execution of WordPress's validation.
	event.preventDefault();
	event.stopImmediatePropagation();
	$spinner.removeClass('is-active');

	// Show the errors.
	if ($error.length) {
		$error.text(carbonFieldsL10n.container.pleaseFillTheRequiredFields);
	} else {
		const html = `
			<div class="settings-error error hidden below-h2 carbon-error-required">
				<p>
					<strong>${carbonFieldsL10n.container.pleaseFillTheRequiredFields}</strong>
				</p>
			</div>
		`;

		$(html)
			.insertAfter('#wpbody-content .wrap > :header:first')
			.slideDown();
	}

	// Expand containers that are hidden but have any errors.
	$('.postbox > .button-link, .widget-title-action, .menu-item-handle .item-edit')
		.filter((index, element) => $(element)
			.closest('.postbox, .widget, .menu-item')
			.find('.carbon-highlight:not(:visible)').length > 0)
		.trigger('click');
}

/**
 * Validate the container.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} action.payload.containerId
 * @param  {Object} action.payload.event
 * @return {void}
 */
export function* workerValidate({ payload: { containerId, event } }) {
	const container = yield select(getContainerById, containerId);
	const ids = yield select(getFieldsByRoots, container.fields);

	yield call(validate, ids, event);
}

/**
 * Validate the containers.
 *
 * @param  {Object} action
 * @param  {Object} action.payload
 * @return {void}
 */
export function* workerValidateAll({ payload }) {
	const fields = yield select(getFields);
	const ids = yield call(keys, fields);

	yield call(validate, ids, payload);
}

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	yield all([
		takeEvery(validateContainer, workerValidate),
		takeLatest(validateAllContainers, workerValidateAll),
	]);
}
