/**
 * The external dependencies.
 */
import React from 'react';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

/**
 * The internal dependencies.
 */
import ComposedTextField, { TextField } from 'fields/components/text';
import { updateField } from 'fields/actions';

/**
 * The unit tests.
 */
describe('TextField - Unit', () => {
	it('should render an `input` element', () => {
		const wrapper = shallow(<TextField field={{}} />);
		const actual = wrapper.find('input').length;
		const expected = 1;

		expect(actual).toEqual(expected);
	});

	it('should accept a `name` property', () => {
		const wrapper = shallow(<TextField name="field" field={{}} />);
		const actual = wrapper.find('input').prop('name');
		const expected = 'field';

		expect(actual).toEqual(expected);
	});

	it('should accept a `value` property', () => {
		const wrapper = shallow(<TextField field={{ value: 'test' }} />);
		const actual = wrapper.find('input').prop('value');
		const expected = 'test';

		expect(actual).toEqual(expected);
	});

	it('should accept an `onChange` handler', () => {
		const spy = jest.fn();
		const wrapper = shallow(<TextField field={{}} handleChange={spy} />);
		const node = wrapper.find('input');

		node.simulate('change');

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
	});
});

/**
 * The integration tests.
 */
describe('TextField - Integration', () => {
	it('should update the store', () => {
		const store = configureMockStore()({
			fields: {
				'field-1': {
					id: 'field-1',
					value: 'test'
				}
			}
		});

		const wrapper = mount(
			<Provider store={store}>
				<ComposedTextField id="field-1" />
			</Provider>
		);

		wrapper.find('input').simulate('change', {
			target: {
				value: 'changed'
			}
		});

		const actual = store.getActions();
		const expected = updateField('field-1', { value: 'changed' });

		expect(actual).toEqual(jasmine.arrayContaining([expected]));
	});
});
