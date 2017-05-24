/**
 * The external dependencies.
 */
import { takeEvery, take, call, put, select, all } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { getFieldById } from 'fields/selectors';
import { setupRichTextEditor, setFieldValue } from 'fields/actions';

/**
 * Handle the interaction with the rich text editor.
 *
 * @param  {Object} field
 * @param  {Object} action
 * @return {void}
 *
 * @todo   Handle the rest of selected attachments.
 */
export function* workerSetFieldValue(field, action) {
	const {fieldId, value} = action.payload;

	// Don't make changes if the field doesn't have correct id.
	if (fieldId !== field.id) {
		return;
	}

	// TODO fix this extremely dirty and disgusting hack to sync visual editor with state
	const freshField = yield select(getFieldById, field.id);
	freshField.richTextEditor.editor.setContent(value);
}

/**
 * Initial setup of the rich text editor.
 *
 * @param  {Object} action
 * @return {void}
 */
export function* workerSetupRichTextEditor(action) {
	const field = yield select(getFieldById, action.payload);

	yield takeEvery(setFieldValue, workerSetFieldValue, field);
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield all([
		takeEvery(setupRichTextEditor, workerSetupRichTextEditor),
	]);
}
