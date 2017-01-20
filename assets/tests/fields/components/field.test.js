/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * The internal dependencies.
 */
import { Field } from 'fields/components/field';

describe('Field', () => {
	it('should render with correct classes', () => {
		const wrapper = shallow(<Field field={{}} />);

		expect(wrapper.hasClass('carbon-field')).toBeTruthy();
	});

	it('should add a class that depends on the type', () => {
		const wrapper = shallow(<Field field={{ type: 'Text' }} />);

		expect(wrapper.hasClass('carbon-Text')).toBeTruthy();
	});

	it('should add the `has-width` class when the field has defined width', () => {
		const wrapper = shallow(<Field field={{ width: 20 }} />);

		expect(wrapper.hasClass('has-width')).toBeTruthy();
		expect(wrapper.node.props.style).toEqual({
			width: '20%'
		});
	});

	it('should render the `required` mark', () => {
		const wrapper = shallow(<Field field={{ required: true }} />);

		expect(wrapper.find('.carbon-required').length).toEqual(1);
	});

	it('should render the `help` text', () => {
		const wrapper = shallow(<Field field={{ help_text: 'Some help text here.' }} />);
		const node = wrapper.find('.help-text');

		expect(node.length).toEqual(1);
		expect(node.text()).toEqual('Some help text here.');
	});

	it('should render the nested components', () => {
		const wrapper = shallow(
			<Field field={{}}>
				<p />
			</Field>
		);

		expect(wrapper.find('.field-holder').children().length).toEqual(1);
	});
});
