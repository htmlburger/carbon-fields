/**
 * The external dependencies.
 */
import { take, actionChannel } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { updateField } from 'fields/actions';

/**
 * Start to work.
 *
 * @return {void}
 */
export default function* foreman() {
	const channel = yield actionChannel(updateField);

	while (true) {
		const action = yield take(channel);

		// The action doesn't trigger a change so we can ignore it.
		if (!action.meta.dirty) {
			continue;
		}

		window.addEventListener( 'beforeunload', (event) => {
			const dialogText = 'Changes that you made may not be saved.';
		
			event.returnValue = dialogText;
			return dialogText;
		});

		// Break the loop and terminate the worker since we detected a change.
		break;
	}
}