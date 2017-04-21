/**
 * The external dependencies.
 */
import { testSaga } from 'redux-saga-test-plan';

/**
 * The internal dependencies.
 */
import { createSubmitChannel } from 'lib/events';

import foreman from 'containers/sagas/comment-meta';
import { validateAllContainers, submitForm } from 'containers/actions';

describe('Containers >> Sagas >> Comment Meta', () => {
	describe('Foreman', () => {
		test('should track form submissions', () => {
			testSaga(foreman, {})
				.next()
				.inspect(({ CALL }) => {
					expect(CALL.fn).toBe(createSubmitChannel);
				});
		});

		test('should emit a submit notification', () => {
			const event = {};

			testSaga(foreman, {})
				.next()
				.next('pattern')
				.next({ event })
				.put(submitForm(event));
		});

		test('should trigger validation on all containers', () => {
			const event = {};

			testSaga(foreman, {})
				.next()
				.next('pattern')
				.next({ event })
				.put(submitForm(event))
				.next()
				.put(validateAllContainers(event));
		});
	});
});
