/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import { ContainerTabbed } from 'containers/components/container/tabbed';
import ContainerTabsNav from 'containers/components/container/tabs-nav';
import ContainerTabs from 'containers/components/container/tabs';
import ContainerNonce from 'containers/components/container/nonce';

/**
 * Setup the component under test.
 */
const props = {
	container: {
		nonce: {
			name: 'nonceName',
			value: 'nonceValue',
		},
	},

	tabs: [],
};

const wrapper = shallow(<ContainerTabbed {...props} />);

describe('Containers >> Components >> Container >> Tabbed', () => {
	test('should render', () => {
		expect(wrapper.is('div')).toBeTruthy();
	});

	test('should render nonce input', () => {
		expect(wrapper.find(ContainerNonce)).toHaveLength(1);
	});

	test('should render tabs navigation', () => {
		expect(wrapper.find(ContainerTabsNav)).toHaveLength(1);
	});

	test('should render tabs', () => {
		expect(wrapper.find(ContainerTabs)).toHaveLength(1);
	});
});
