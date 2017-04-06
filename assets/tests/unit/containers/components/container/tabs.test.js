/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import ContainerTabs from 'containers/components/container/tabs';

/**
 * Setup the component under test.
 */
const props = {
	container: {
		id: 'containerId',
		type: 'containerType',
		classes: [],
	},

	tabs: [
		{
			id: 'tab1',
			name: 'Tab 1',
			active: true,
			fields: [],
		},
		{
			id: 'tab2',
			name: 'Tab 2',
			active: true,
			fields: [],
		},
	],
};

const wrapper = shallow(<ContainerTabs {...props} />);

describe('Containers >> Components >> Container >> Tabs', () => {
	test('should render', () => {
		expect(wrapper.exists()).toBeTruthy();
	});

	test('should render passed tabs', () => {
		expect(wrapper.children()).toHaveLength(2);
	});

	test('should add "active" class to the current tab', () => {
		expect(
			wrapper
				.children()
				.first()
				.hasClass('active')
		).toBeTruthy();
	});
});
