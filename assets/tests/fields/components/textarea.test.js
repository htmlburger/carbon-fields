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
import ComposedTextareaField, { TextareaField } from 'fields/components/textarea';
import { updateField } from 'fields/actions';

/**
 * The unit tests.
 */
describe('TextareaField - Unit', () => {
	it('should render a `textarea` element', () => {
		const wrapper = shallow(<TextareaField field={{}} />);
		const actual = wrapper.find('textarea').length;
		const expected = 1;

		expect(actual).toEqual(expected);
	});

	it('should accept a `name` property', () => {
		const wrapper = shallow(<TextareaField name="field" field={{}} />);
		const actual = wrapper.find('textarea').prop('name');
		const expected = 'field';

		expect(actual).toEqual(expected);
	});

	it('should accept a `value` property', () => {
		const wrapper = shallow(<TextareaField field={{ value: 'test' }} />);
		const actual = wrapper.find('textarea').prop('value');
		const expected = 'test';

		expect(actual).toEqual(expected);
	});

	it('should accept a `height` property', () => {
		const wrapper = shallow(<TextareaField field={{ height: 100 }} />);
		const actual = wrapper.find('textarea').prop('style');
		const expected = jasmine.objectContaining({ height: 100 });

		expect(actual).toEqual(expected);
	});

	it('should accept a `rows` property', () => {
		const wrapper = shallow(<TextareaField field={{ rows: 10 }} />);
		const actual = wrapper.find('textarea').prop('rows');
		const expected = 10;

		expect(actual).toEqual(expected);
	});

	it('should accept an `onChange` handler', () => {
		const spy = jest.fn();
		const wrapper = shallow(<TextareaField field={{}} handleChange={spy} />);
		const node = wrapper.find('textarea');

		node.simulate('change');

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
	});
});

/**
 * The integration tests.
 */
describe('TextareaField - Integration', () => {
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
				<ComposedTextareaField id="field-1" />
			</Provider>
		);

		wrapper.find('textarea').simulate('change', {
			target: {
				value: 'changed'
			}
		});

		const actual = store.getActions();
		const expected = updateField('field-1', { value: 'changed' });

		expect(actual).toEqual(jasmine.arrayContaining([expected]));
	});
});
