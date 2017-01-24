/**
 * The external dependencies.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { defaults } from 'lodash';

import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

/**
 * The internal dependencies.
 */
import ComposedSelectField, { SelectField } from 'fields/components/select';
import { updateField } from 'fields/actions';

/**
 * The unit tests.
 */
describe('SelectField - Unit', () => {
	function setup(props = {}) {
		props = defaults(props, {
			name: 'field',
			field: {
				id: 'field-1',
				type: 'Select',
				value: 'option-1',
				options: [
					{
						name: 'Option 1',
						value: 'option-1'
					},
					{
						name: 'Option 2',
						value: 'option-2'
					}
				]
			},
			handleChange: jest.fn(),
		});

		const wrapper = shallow(<SelectField {...props} />);

		return { wrapper, props };
	}

	it('should render a `select` element', () => {
		const { wrapper } = setup();

		const node = wrapper.find('select');
		const children = node.children();
		const child = children.first();

		expect(node.length).toEqual(1);
		expect(node.prop('id')).toEqual('field-1');
		expect(node.prop('value')).toEqual('option-1');

		expect(children.length).toEqual(2);
		expect(child.prop('value')).toEqual('option-1');
		expect(child.text()).toEqual('Option 1');
	});

	it('should accept a `name` property', () => {
		const { wrapper } = setup();
		const node = wrapper.find('select');

		expect(node.prop('name')).toEqual('field');
	});

	it('should accept an `onChange` handler', () => {
		const { wrapper, props: { handleChange } } = setup();
		const node = wrapper.find('select');

		node.simulate('change');

		expect(handleChange).toHaveBeenCalled();
		expect(handleChange).toHaveBeenCalledTimes(1);
	});
});

/**
 * The integration tests.
 */
describe('SelectField - Integration', () => {
	function setup(state = {}) {
		const store = configureMockStore()({
			fields: {
				'field-1': defaults(state, {
					id: 'field-1',
					type: 'Select',
					name: 'field-1',
					options: [
						{
							name: 'Option 1',
							value: 'option-1'
						},
						{
							name: 'Option 2',
							value: 'option-2'
						}
					]
				})
			}
		});

		const wrapper = mount(
			<Provider store={store}>
				<ComposedSelectField id="field-1" />
			</Provider>
		);

		return { wrapper, store };
	}

	it('should update the store', () => {
		const { wrapper, store } = setup();

		wrapper.find('select').simulate('change', {
			target: {
				value: 'option-2'
			}
		});

		expect(store.getActions()).toEqual(jasmine.arrayContaining([
			updateField('field-1', { value: 'option-2' })
		]));
	});

	it('should not render a `select` element when doesn`t have options', () => {
		const { wrapper } = setup({
			options: []
		});

		expect(wrapper.find('select').length).toEqual(0);
	});

	it('should use the value of the first option as fallback', () => {
		const { wrapper, store } = setup();

		expect(store.getActions()).toEqual(jasmine.arrayContaining([
			updateField('field-1', { value: 'option-1' })
		]));
	});
});
