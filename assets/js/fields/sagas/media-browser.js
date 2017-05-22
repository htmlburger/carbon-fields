/**
 * The external dependencies.
 */
import { takeEvery, take, call, put, select, all } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { createMediaBrowserChannel } from 'lib/events';
import { getFieldById } from 'fields/selectors';
import { getAttachmentThumbnail } from 'fields/helpers';
import { setupMediaBrowser, openMediaBrowser, updateField } from 'fields/actions';

/**
 * Handle the interaction with media browser of WordPress.
 *
 * @param  {Object} channel
 * @param  {Object} field
 * @param  {Object} browser
 * @param  {Object} action
 * @return {void}
 *
 * @todo   Handle the rest of selected attachments.
 */
export function* workerOpenMediaBrowser(channel, field, browser, action) {
	// Don't open the browser if the field doesn't have correct id.
	if (action.payload !== field.id) {
		return;
	}

	const liveField = yield select(getFieldById, action.payload);
	browser.once('open', (function(value) {
		var attachment = value ? window.wp.media.attachment(value) : null;
		if (attachment) {
			attachment.fetch();
		}
		browser.state().get('selection').set( attachment ? [attachment] : [] );
	}).bind(null, liveField.value));

	yield call([browser, browser.open]);

	while (true) {
		const { selection } = yield take(channel);
		const [ attachment, ...attachments ] = selection;
		const thumbnail = yield call(getAttachmentThumbnail, attachment);

		yield put(updateField(field.id, {
			file_type: attachment.type,
			file_name: attachment.filename,
			file_url: attachment.url,
			thumb_url: thumbnail || field.default_thumb_url,
			value: attachment.id,
		}));
	}
}

/**
 * Initial setup of the media browser.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerSetupMediaBrowser(action) {
	const field = yield select(getFieldById, action.payload);
	const {
		window_button_label,
		window_label,
		type_filter,
		value_type
	} = field;

	const channel = yield call(createMediaBrowserChannel, {
		title: window_label,
		library: {
			type: type_filter
		},
		button: {
			text: window_button_label
		},
		multiple: true
	});

	const { browser } = yield take(channel);

	yield takeEvery(openMediaBrowser, workerOpenMediaBrowser, channel, field, browser);
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(setupMediaBrowser, workerSetupMediaBrowser),
	]);
}
