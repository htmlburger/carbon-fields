/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import { TextField } from 'fields/components/text';

describe('TextField', () => {
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
