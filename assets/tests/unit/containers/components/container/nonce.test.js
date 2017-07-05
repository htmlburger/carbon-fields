/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import ContainerNonce from 'containers/components/container/nonce';

describe('Containers >> Components >> Container >> Nonce', () => {
	test('should render', () => {
		const wrapper = shallow(
			<ContainerNonce container={{
				nonce: {
					name: 'nonceName',
					value: 'nonceValue',
				},
			}} />
		);

		expect(wrapper.is('input')).toBeTruthy();
		expect(wrapper.prop('id')).toEqual('nonceName');
		expect(wrapper.prop('name')).toEqual('nonceName');
		expect(wrapper.prop('value')).toEqual('nonceValue');
	});
});
