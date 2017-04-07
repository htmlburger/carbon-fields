/**
 * Mock the factory function since we don't
 * want to render any fields.
 */
jest.mock('fields/factory');

/**
 * The external dependencies.
 */
import React from 'react';
import { mount } from 'enzyme';
import { defaults } from 'lodash';

/**
 * The internal dependencies.
 */
import ContainerTabbed from 'containers/components/container/tabbed';

/**
 * Small the component under test.
 *
 * @param  {Object} props
 * @return {Object}
 */
const setup = (props = {}) => {
	props = defaults(props, {
		container: {
			id: 'containerId',
			type: 'containerType',
			classes: [],
			fields: [
				{
					id: 'field1',
					type: 'field1',
					name: 'field1',
				},

				{
					id: 'field2',
					type: 'field2',
					name: 'field2',
				},

				{
					id: 'field3',
					type: 'field3',
					name: 'field3',
				},
			],
			settings: {
				tabs: {
					tab1: ['field1', 'field2'],
					tab2: ['field3'],
				},
			},
			nonce: {
				name: 'nonceName',
				value: 'nonceValue',
			}
		},
		ui: {},
		switchContainerTab: jest.fn(),
	});

	const wrapper = mount(<ContainerTabbed {...props} />);

	return { wrapper, props };
};

describe('Containers >> Components >> Container >> Tabbed', () => {
	test('should prepare tabs', () => {
		const { wrapper } = setup();
		const { tabs } = wrapper.find('ContainerTabbed').props();

		expect(tabs).toHaveLength(2);
	});

	test('should add a slug to each tab', () => {
		const { wrapper } = setup();
		const { tabs } = wrapper.find('ContainerTabbed').props();

		expect(tabs[0].id).toEqual('tab-1');
		expect(tabs[1].id).toEqual('tab-2');
	});

	test('should add fields references to each tab', () => {
		const { wrapper } = setup();
		const { tabs } = wrapper.find('ContainerTabbed').props();

		expect(tabs[0].fields).toHaveLength(2);
		expect(tabs[1].fields).toHaveLength(1);

		expect(tabs[0].fields[0].id).toEqual('field1');
		expect(tabs[1].fields[0].id).toEqual('field3');
	});

	test('should show first tab by default', () => {
		const { wrapper, props } = setup();

		expect(props.switchContainerTab).toHaveBeenCalledTimes(1);
		expect(props.switchContainerTab).toHaveBeenCalledWith('containerId', 'tab-1');
	});

	test('should show tab that is in location hash', () => {
		window.location.hash = '#!tab-2';

		const { wrapper, props } = setup({
			ui: {
				tabs_in_url: true,
			},
		});

		expect(props.switchContainerTab).toHaveBeenCalledTimes(1);
		expect(props.switchContainerTab).toHaveBeenCalledWith('containerId', 'tab-2');
	});

	test('should update store on tab change', () => {
		const { wrapper, props } = setup();

		wrapper
			.find('.carbon-tabs-nav a')
			.last()
			.simulate('click', {
				preventDefault() {},
			});

		expect(props.switchContainerTab).toHaveBeenLastCalledWith('containerId', 'tab-2');
	});
});
