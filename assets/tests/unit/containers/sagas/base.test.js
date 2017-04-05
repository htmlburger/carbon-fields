/**
 * The external dependencies.
 */
import urldecode from 'locutus/php/url/urldecode';
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { map, keyBy, get, set } from 'lodash';

/**
 * The internal dependencies.
 */
import { PAGE_NOW_WIDGETS, PAGE_NOW_MENUS } from 'lib/constants';

import factory from 'containers/factory';
import foreman, { workerReceiveContainer, workerSyncHash } from 'containers/sagas/base';
import { receiveContainer, addContainer, toggleContainerBox, switchContainerTab } from 'containers/actions';
import { getContainerById } from 'containers/selectors';

import { addFields } from 'fields/actions';

describe('Containers >> Sagas >> Base', () => {
	describe('Foreman', () => {
		test('should handle SWITCH_CONTAINER_TAB action', () => {
			const generator = foreman({});
			const expected = takeEvery(switchContainerTab, workerSyncHash).name;
			const actual = generator.next().value.name;

			expect(expected).toEqual(expected)
		});

		test('should handle RECEIVE_CONTAINER action', () => {
			let generator, expected, actual;

			// On "Widgets" page.
			window.pagenow = PAGE_NOW_WIDGETS;

			generator = foreman({});
			generator.next();

			expected = takeEvery(receiveContainer, workerReceiveContainer).name;
			actual = generator.next().value.name;

			expect(actual).toEqual(expected);

			// On "Menus" page.
			window.pagenow = PAGE_NOW_MENUS;

			generator = foreman({});
			generator.next();

			expected = takeEvery(receiveContainer, workerReceiveContainer).name;
			actual = generator.next().value.name;

			expect(actual).toEqual(expected);
		});
	});

	describe('Workers', () => {
		test('Receive Container', () => {
			const generator = workerReceiveContainer({}, receiveContainer('', true));
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
				put(addContainer(container))
			);

			// Should add fields to the state.
			next = generator.next();
			expect(next.value).toEqual(
				put(addFields({}))
			);

			// Should render the container in DOM.
			next = generator.next();
			expect(next.value).toEqual(
				call(factory, {}, 'containerType', { id: 'containerId' })
			);

			// Should expand/collapse the DOM parent of the container.
			next = generator.next();
			expect(next.value).toEqual(
				put(toggleContainerBox('containerId', true))
			);
		});

		test('Sync Hash', () => {
			const action = switchContainerTab('containerId', 'tabId');
			const generator = workerSyncHash(action);
			let next;

			// Should read the container's state from the store.
			next = generator.next();
			expect(next.value).toEqual(
				select(getContainerById, 'containerId')
			);

			const container = {
				ui: {
					tabs_in_url: true,
				},
			};

			// Should read the hash flag from the container's state.
			next = generator.next(container);
			expect(next.value).toEqual(
				call(get, container, 'ui.tabs_in_url', false)
			);

			// Should update `window.location.hash`.
			next = generator.next(true);
			expect(next.value).toEqual(
				call(set, window, 'location.hash', '!tabId')
			);
		});
	});
});
