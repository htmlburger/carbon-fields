/**
 * The external dependencies.
 */
import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import store from 'store';

/**
 * The internal dependencies.
 */
import { setupField, updateField } from 'fields/actions';

export function* workerSetupEditor(action) {
	var mceInit = jQuery.extend({}, window.tinyMCEPreInit.mceInit.carbon_settings);

	mceInit.selector = `#${action.payload.fieldId}`;

	var a = window.tinymce.init(mceInit);

	a.then(([ ed ]) => {
		ed.on('blur', function () {
			ed.save();

			console.log('saved');

			store.dispatch(updateField(action.payload.fieldId, {
				value: ed.getContent()
			}))
		});
	});
}

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	yield [
		takeEvery(setupField.toString(), workerSetupEditor),
	];
}