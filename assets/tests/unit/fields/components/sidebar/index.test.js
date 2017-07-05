/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { defaultsDeep } from 'lodash';

/**
 * The internal dependencies.
 */
import { SidebarField } from 'fields/components/sidebar';
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
		options: [],
		handleChange: jest.fn(),
	});

	const wrapper = shallow(<SidebarField {...props} />);

	return { wrapper, props };
};

describe('Fields >> Components >> Sidebar', () => {
	test('should render', () => {
		const { wrapper } = setup();

		const node = wrapper.find('select');

		expect(node).toHaveLength(1);
		expect(node.prop('id')).toEqual('fieldId');
		expect(node.prop('value')).toEqual('fieldValue');
	});

	test('should render options', () => {
		const { wrapper } = setup({
			options: [
				{
					name: 'Option 1',
					value: 'option1',
				},
				{
					name: 'Option 2',
					value: 'option2',
				},
			],
		});

		const nodes = wrapper.find('option');

		expect(nodes).toHaveLength(2);
		expect(nodes.first().prop('value')).toEqual('option1');
	});

	test('should apply provided "name" property', () => {
		const { wrapper } = setup({
			name: 'fieldName',
		});

		expect(wrapper.find('select').prop('name')).toEqual('fieldName');
	});

	test('should be disabled whe the field is hidden', () => {
		const { wrapper } = setup({
			field: {
				ui: {
					visible: false,
				},
			},
		});

		expect(wrapper.find('select').prop('disabled')).toBeTruthy();
	});

	test('should call "handleChange" callback', () => {
		const { wrapper, props } = setup();
		const event = {
			target: {
				value: 'changed',
			},
		};

		wrapper
			.find('select')
			.simulate('change', event);

		expect(props.handleChange).toHaveBeenCalled();
		expect(props.handleChange).toHaveBeenCalledWith(event);
	});
});
