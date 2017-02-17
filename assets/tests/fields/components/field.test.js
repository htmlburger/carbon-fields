/**
 * The external dependencies.
 */
import React from 'react';
import { defaults } from 'lodash';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import { Field } from 'fields/components/field';

describe('Field', () => {
	function setup(props = {}) {
		props = defaults(props, {
			id: 'field-1',
			type: 'Text',
		});

		return shallow(<Field field={props} />);
	}

	it('should render with the correct classes', () => {
		const wrapper = setup();

		expect(wrapper.hasClass('carbon-field')).toBeTruthy();
		expect(wrapper.hasClass('carbon-Text')).toBeTruthy();
	});

	it('should add the `has-width` class when the field has defined width', () => {
		const wrapper = setup({ width: 20 });

		expect(wrapper.hasClass('has-width')).toBeTruthy();
		expect(wrapper.prop('style')).toEqual(jasmine.objectContaining({
			width: '20%'
		}));
	});

	it('should render the `required` mark', () => {
		const wrapper = setup({ required: true });

		expect(wrapper.find('.carbon-required').length).toEqual(1);
	});

	it('should render the `help` text', () => {
		const wrapper = setup({ help_text: 'Some help text here.' });
		const node = wrapper.find('.help-text');

		expect(node.length).toEqual(1);
		expect(node.text()).toEqual('Some help text here.');
	});

	it('should accept `children`', () => {
		const wrapper = shallow(
			<Field field={{ id: 'field-1', type: 'Text' }}>
				<p>Some text here.</p>
			</Field>
		);

		const node = wrapper.find('.field-holder p');

		expect(node.length).toEqual(1);
		expect(node.text()).toEqual('Some text here.');
	});
});
