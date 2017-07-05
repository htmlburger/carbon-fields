/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { defaultsDeep } from 'lodash';

/**
 * The internal dependencies.
 */
import { TextareaField } from 'fields/components/textarea';
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

	const wrapper = shallow(<TextareaField {...props} />);

	return { wrapper, props };
};

describe('Fields >> Components >> Textarea', () => {
	test('should render', () => {
		const { wrapper } = setup();

		const node = wrapper.find('textarea');

		expect(node).toHaveLength(1);
		expect(node.prop('id')).toEqual('fieldId');
		expect(node.prop('value')).toEqual('fieldValue');
	});

	test('should apply provided "name" property', () => {
		const { wrapper } = setup({
			name: 'fieldName',
		});

		expect(wrapper.find('textarea').prop('name')).toEqual('fieldName');
	});

	test('should apply provided "rows" property', () => {
		const { wrapper } = setup({
			field: {
				rows: 7,
			},
		});

		expect(wrapper.find('textarea').prop('rows')).toEqual(7);
	});

	test('should be disabled whe the field is hidden', () => {
		const { wrapper } = setup({
			field: {
				ui: {
					visible: false,
				},
			},
		});

		expect(wrapper.find('textarea').prop('disabled')).toBeTruthy();
	});

	test('should call "handleChange" callback', () => {
		const { wrapper, props } = setup();
		const event = {
			target: {
				value: 'changed',
			},
		};

		wrapper
			.find('textarea')
			.simulate('change', event);

		expect(props.handleChange).toHaveBeenCalled();
		expect(props.handleChange).toHaveBeenCalledWith(event);
	});
});
