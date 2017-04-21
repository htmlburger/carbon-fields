/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import { ContainerTabsNav } from 'containers/components/container/tabs-nav';

/**
 * Setup the component under test.
 */
const props = {
	tabs: [
		{
			id: 'tab1',
			name: 'Tab 1',
			active: true,
		},
		{
			id: 'tab2',
			name: 'Tab 2',
			active: false,
		},
	],

	handleClick: jest.fn(),
};

const wrapper = shallow(<ContainerTabsNav {...props} />);

describe('Containers >> Components >> Container >> Tabs Navigation', () => {
	test('should render', () => {
		expect(wrapper.is('ul')).toBeTruthy();
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

	test('should call "handleClick" callback', () => {
		wrapper
			.find('a')
			.first()
			.simulate('click', {
				preventDefault() {},
			});

		expect(props.handleClick).toHaveBeenCalled();
		expect(props.handleClick).toHaveBeenCalledWith('tab1');
	});
});
