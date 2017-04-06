/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import ContainerTabsNav from 'containers/components/container/tabs-nav';

/**
 * Small helper to setup the component under test.
 *
 * @return {Object}
 */
const setup = () => {
	const tabs = [
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
	];

	const onClick = jest.fn();

	const wrapper = shallow(
		<ContainerTabsNav
			tabs={tabs}
			onClick={onClick} />
	);

	const props = { tabs, onClick };

	return { wrapper, props };
};

describe('Containers >> Components >> Container >> Tabs Navigation', () => {
	test('should render', () => {
		const { wrapper } = setup();

		expect(wrapper.is('ul')).toBeTruthy();
	});

	test('should render passed tabs', () => {
		const { wrapper } = setup();

		expect(wrapper.children()).toHaveLength(2);
	});

	test('should add "active" class to the current tab', () => {
		const { wrapper } = setup();

		expect(
			wrapper
				.children()
				.first()
				.hasClass('active')
		).toBeTruthy();
	});

	test('should call passed "onClick" callback', () => {
		const { wrapper, props } = setup();

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
