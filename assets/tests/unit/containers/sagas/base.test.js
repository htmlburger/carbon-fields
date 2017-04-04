/**
 * The external dependencies.
 */
import urldecode from 'locutus/php/url/urldecode';
import { call, put } from 'redux-saga/effects';
import { map, keyBy } from 'lodash';

/**
 * The internal dependencies.
 */
import factory from 'containers/factory';
import * as workers from 'containers/sagas/base';
import * as containerActions from 'containers/actions';
import * as fieldActions from 'fields/actions';

describe('Containers >> Sagas >> Base', () => {
	test('Receive Container', () => {
		const generator = workers.workerReceiveContainer({}, containerActions.receiveContainer('', true));
		let next;

		// Should decode the container string.
		next = generator.next('');
		expect(next.value).toEqual(
			call(urldecode, '')
		);

		// Should convert the container to a JSON structure.
		next = generator.next('');
		expect(next.value).toEqual(
			call([JSON, JSON.parse], '')
		);

		const container = {
			id: 'containerId',
			type: 'containerType',
			fields: [],
		};

		// Should flatten the fields.
		next = generator.next(container);
		expect(next.value).toMatchObject({
			CALL: {
				args: expect.arrayContaining([[]]),
				fn: map,
			},
		});

		// Should index all fields by their `id` property.
		next = generator.next();
		expect(next.value).toEqual(
			call(keyBy, [], 'id')
		);

		// Should add container to the state.
		next = generator.next({});
		expect(next.value).toEqual(
			put(containerActions.addContainer(container))
		);

		// Should add fields to the state.
		next = generator.next();
		expect(next.value).toEqual(
			put(fieldActions.addFields({}))
		);

		// Should render the container in DOM.
		next = generator.next();
		expect(next.value).toEqual(
			call(factory, {}, 'containerType', { id: 'containerId' })
		);

		// Should expand/collapse the DOM parent of the container.
		next = generator.next();
		expect(next.value).toEqual(
			put(containerActions.toggleContainerBox('containerId', true))
		);
	});
});
