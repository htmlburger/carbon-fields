/**
 * The external dependencies.
 */
import React from 'react';
import { mount } from 'enzyme';

/**
 * The internal dependencies.
 */
import ContainerTabsNav from 'containers/components/container/tabs-nav';

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

	onClick: jest.fn(),
};

const wrapper = mount(<ContainerTabsNav {...props} />);

describe('Containers >> Components >> Container >> Tabs Navigation', () => {
	test('should call passed "onClick" callback', () => {
		wrapper
			.find('a')
			.first()
			.simulate('click', {
				preventDefault() {},
			});

		expect(props.onClick).toHaveBeenCalled();
		expect(props.onClick).toHaveBeenCalledWith('tab1');
	});
});
