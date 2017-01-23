/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import { TextareaField } from 'fields/components/textarea';

describe('TextareaField', () => {
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
