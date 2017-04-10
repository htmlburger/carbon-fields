/**
 * The external dependencies.
 */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

/**
 * The internal dependencies.
 */
import TextField from 'fields/components/text';
import { updateField } from 'fields/actions';
import { stubField } from 'tests/helpers';

describe('Fields >> Components >> Text', () => {
	test('should update the store', () => {
		const store = configureMockStore()({
			fields: {
				'fieldId': stubField({
					value: '',
				}),
			},
		});

		const wrapper = mount(
			<Provider store={store}>
				<TextField id="fieldId" />
			</Provider>
		);

		store.clearActions();

		wrapper
			.find('input')
			.simulate('change', {
				target: {
					value: 'newValue',
				},
			});

		expect(store.getActions()).toEqual([
			updateField('fieldId', {
				value: 'newValue',
			})
		]);
	});
});
