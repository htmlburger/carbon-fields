/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { defaultsDeep } from 'lodash';

/**
 * The internal dependencies.
 */
import { TextField } from 'fields/components/text';
import { stubField } from 'tests/helpers';

/**
 * Setup the component under test.
 *
 * @param  {Object} props
 * @return {Object}
 */
const setup = (props = {}) => {
	props = defaultsDeep(props, {
		name: null,
		field: stubField(props.field),
		handleChange: jest.fn(),
	});

	const wrapper = shallow(<TextField {...props} />);

	return { wrapper, props };
};

describe('Fields >> Components >> Text', () => {
	test('should render', () => {
		const { wrapper } = setup();

		const node = wrapper.find('input');

		expect(node).toHaveLength(1);
		expect(node.prop('id')).toEqual('fieldId');
		expect(node.prop('value')).toEqual('fieldValue');
	});

	test('should apply provided "name" property', () => {
		const { wrapper } = setup({
			name: 'fieldName',
		});

		expect(wrapper.find('input').prop('name')).toEqual('fieldName');
	});

	test('should be disabled whe the field is hidden', () => {
		const { wrapper } = setup({
			field: {
				ui: {
					visible: false,
				},
			},
		});

		expect(wrapper.find('input').prop('disabled')).toBeTruthy();
	});

	test('should call "handleChange" callback', () => {
		const { wrapper, props } = setup();
		const event = {
			target: {
				value: 'changed',
			},
		};

		wrapper
			.find('input')
			.simulate('change', event);

		expect(props.handleChange).toHaveBeenCalled();
		expect(props.handleChange).toHaveBeenCalledWith(event);
	});
});
