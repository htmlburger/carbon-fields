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
import TextareaField from 'fields/components/textarea';
import { updateField } from 'fields/actions';
import { stubField } from 'tests/helpers';

describe('Fields >> Components >> Textarea', () => {
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
				<TextareaField id="fieldId" />
			</Provider>
		);

		store.clearActions();

		wrapper
			.find('textarea')
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
