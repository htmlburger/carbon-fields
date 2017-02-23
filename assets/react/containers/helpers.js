/**
 * The external dependencies.
 */
import { call } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { cancelTasks } from 'lib/helpers';
import { teardownContainer } from 'containers/actions';

/**
 * Kill the saga.
 *
 * @param  {String}   containerId
 * @param  {Object[]} tasks
 * @return {void}
 */
export function* stopSaga(containerId, tasks) {
	yield call(cancelTasks, teardownContainer, tasks, ({ payload }) => payload.containerId === containerId);
}
