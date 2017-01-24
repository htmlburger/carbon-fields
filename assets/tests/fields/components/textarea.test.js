/**
 * The external dependencies.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { defaultsDeep } from 'lodash';

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
	function setup(props = {}) {
		props = defaultsDeep(props, {
			name: 'field',
			field: {
				id: 'field-1',
				value: 'test',
			},
			handleChange: jest.fn(),
		});

		const wrapper = shallow(<TextareaField {...props} />);

		return { wrapper, props };
	}

	it('should render a `textarea` element', () => {
		const { wrapper } = setup({});
		const node = wrapper.find('textarea');

		expect(node.length).toEqual(1);
		expect(node.prop('id')).toEqual('field-1');
		expect(node.prop('value')).toEqual('test');
	});

	it('should accept a `name` property', () => {
		const { wrapper } = setup({});

		expect(wrapper.find('textarea').prop('name')).toEqual('field');
	});

	it('should accept a `height` property', () => {
		const { wrapper } = setup({
			field: {
				height: 100
			}
		});

		expect(wrapper.find('textarea').prop('style')).toEqual(jasmine.objectContaining({
			height: 100
		}));
	});

	it('should accept a `rows` property', () => {
		const { wrapper } = setup({
			field: {
				rows: 10
			}
		});

		expect(wrapper.find('textarea').prop('rows')).toEqual(10);
	});

	it('should accept an `onChange` handler', () => {
		const { wrapper, props: { handleChange } } = setup();

		wrapper.find('textarea').simulate('change');

		expect(handleChange).toHaveBeenCalled();
		expect(handleChange).toHaveBeenCalledTimes(1);
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
					name: 'field-1',
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

		expect(store.getActions()).toEqual(jasmine.arrayContaining([
			updateField('field-1', { value: 'changed' })
		]));
	});
});
