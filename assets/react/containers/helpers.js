/**
 * The external dependencies.
 */
import { take, cancel } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { teardownContainer } from 'containers/actions';

/**
 * Clear any started tasks when the container is being removed.
 *
 * @param {String}   containerId
 * @param {Object[]} tasks
 * @return {void}
 */
export function* stopSaga(containerId, tasks) {
	while (true) {
		const { payload } = yield take(teardownContainer);

		// Clean up only for the specified container.
		if (payload.containerId === containerId) {
			yield tasks.map(task => cancel(task));

			break;
		}
	}
}
