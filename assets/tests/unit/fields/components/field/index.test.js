/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { defaultsDeep } from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';

/**
 * Setup the component under test.
 *
 * @param  {Object} props
 * @return {Object}
 */
const setup = (props = {}) => {
	props = defaultsDeep(props, {
		field: {
			id: 'fieldId',
			type: 'fieldType',
			classes: [],
			ui: {}
		},
		children: null,
	});

	const wrapper = shallow(<Field {...props} />);

	return { wrapper, props };
};

describe('Fields >> Components >> Field', () => {
	test('should render', () => {
		const { wrapper } = setup();

		expect(wrapper.is('div')).toBeTruthy();
		expect(wrapper.hasClass('carbon-field')).toBeTruthy();
		expect(wrapper.hasClass('carbon-fieldType')).toBeTruthy();
	});

	test('should apply provided classnames', () => {
		const { wrapper } = setup({
			field: {
				classes: [
					'classA',
					'classB',
				]
			},
		});

		expect(wrapper.hasClass('classA')).toBeTruthy();
		expect(wrapper.hasClass('classB')).toBeTruthy();
	});

	test('should apply provided "width" property', () => {
		const { wrapper } = setup({
			field: {
				width: 35,
			},
		});

		expect(wrapper.hasClass('has-width')).toBeTruthy();
		expect(wrapper.prop('style')).toEqual(
			expect.objectContaining({
				flexBasis: '35%',
			})
		);
	});

	test('should be hidden when the field is not visible', () => {
		const { wrapper } = setup({
			field: {
				ui: {
					visible: false,
				},
			},
		});

		expect(wrapper.prop('hidden')).toBeTruthy();
	});

	test('should be highlighted when the field is not valid', () => {
		const { wrapper } = setup({
			field: {
				ui: {
					valid: false,
				},
			},
		});

		expect(wrapper.hasClass('carbon-highlight')).toBeTruthy();
	});

	test('should render the label', () => {
		const { wrapper } = setup({
			field: {
				label: 'Field Label'
			},
		});

		const node = wrapper.find('label');

		expect(node).toHaveLength(1);
		expect(node.text()).toEqual('Field Label');
	});

	test('should render the "required" mark', () => {
		const { wrapper } = setup({
			field: {
				required: true,
			},
		});

		expect(wrapper.find('.carbon-required')).toHaveLength(1);
	});

	test('should render the help text', () => {
		const { wrapper } = setup({
			field: {
				help_text: 'Some help text',
			},
		});

		const node = wrapper.find('.help-text');

		expect(node).toHaveLength(1);
		expect(node.text()).toEqual('Some help text');
	});

	test('should render the error', () => {
		const { wrapper } = setup({
			field: {
				ui: {
					error: 'Your field is invalid',
				},
			},
		});

		const node = wrapper.find('.carbon-error');

		expect(node).toHaveLength(1);
		expect(node.text()).toEqual('Your field is invalid');
	});

	test('should render the children', () => {
		const paragraph = <p>Lorem Ipsum</p>;
		const { wrapper } = setup({
			children: paragraph,
		});

		expect(wrapper.contains(paragraph)).toBeTruthy();
	});
});
