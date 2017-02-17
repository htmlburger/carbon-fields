/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import { SeparatorField } from 'fields/components/separator';

describe('SeparatorField', () => {
	it('should render a heading', () => {
		const wrapper = shallow(<SeparatorField field={{ id: 'field-1', type: 'Separator', label: 'Some separator' }} />);
		const node = wrapper.find('h3');

		expect(node.length).toEqual(1);
		expect(node.text()).toEqual('Some separator');
	});
});
