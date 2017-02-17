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
import ComposedTextField, { TextField } from 'fields/components/text';
import { updateField } from 'fields/actions';

/**
 * The unit tests.
 */
describe('TextField - Unit', () => {
	function setup(props = {}) {
		props = defaultsDeep(props, {
			name: 'field',
			field: {
				id: 'field-1',
				type: 'Text',
				value: 'test',
			},
			handleChange: jest.fn(),
		});

		const wrapper = shallow(<TextField {...props} />);

		return { wrapper, props };
	}

	it('should render an `input` element', () => {
		const { wrapper } = setup({});
		const node = wrapper.find('input');

		expect(node.length).toEqual(1);
		expect(node.prop('id')).toEqual('field-1');
		expect(node.prop('value')).toEqual('test');
	});

	it('should accept a `name` property', () => {
		const { wrapper } = setup({});

		expect(wrapper.find('input').prop('name')).toEqual('field');
	});

	it('should accept an `onChange` handler', () => {
		const { wrapper, props: { handleChange } } = setup();

		wrapper.find('input').simulate('change');

		expect(handleChange).toHaveBeenCalled();
		expect(handleChange).toHaveBeenCalledTimes(1);
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
					type: 'Text',
					name: 'field-1',
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

		expect(store.getActions()).toEqual(jasmine.arrayContaining([
			updateField('field-1', { value: 'changed' })
		]));
	});
});
