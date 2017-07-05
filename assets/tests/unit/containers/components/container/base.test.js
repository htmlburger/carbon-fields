/**
 * Mock the factory function since we don't
 * want to render any fields.
 */
jest.mock('fields/factory');

/**
 * The external dependencies.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { defaults } from 'lodash';

/**
 * The internal dependencies.
 */
import ContainerBase from 'containers/components/container/base';
import fieldFactory from 'fields/factory';

/**
 * Small helper to setup the container under test.
 *
 * @param  {Object} props
 * @return {Object}
 */
const setup = (props = {}) => {
	let {
		container = {},
		fields = [],
		children = null
	} = props;

	container = defaults(container, {
		id: 'containerId',
		type: 'containerType',
		classes: [],
	});

	const wrapper = shallow(
		<ContainerBase
			container={container}
			fields={fields}
			children={children} />
	);

	props = { container, fields, children };

	return { wrapper, props };
};

describe('Containers >> Components >> Container >> Base', () => {
	test('should render', () => {
		const { wrapper } = setup();

		expect(wrapper.is('div')).toBeTruthy();
	});

	test('should render with correct classes', () => {
		const { wrapper, props } = setup();

		expect(wrapper.hasClass('carbon-container')).toBeTruthy();
		expect(wrapper.hasClass(`carbon-container-${props.container.id}`)).toBeTruthy();
		expect(wrapper.hasClass(`carbon-container-${props.container.type}`)).toBeTruthy();
	});

	test('should render with classes provided by the user', () => {
		const { wrapper, props } = setup({
			container: {
				classes: ['random-class'],
			},
		});

		expect(wrapper.hasClass('random-class')).toBeTruthy();
	});

	test('should render the passed children', () => {
		const paragraph = <p>Lorem Ipsum</p>;
		const { wrapper, props } = setup({
			children: paragraph,
		});

		expect(wrapper.contains(paragraph)).toBeTruthy();
	});

	test('should render the fields', () => {
		const { wrapper, props } = setup({
			fields: [
				{
					id: 'field1',
					type: 'fieldType1',
				},
				{
					id: 'field2',
					type: 'fieldType2',
				},
			],
		});

		expect(fieldFactory).toHaveBeenCalledTimes(2);
		expect(fieldFactory).toHaveBeenCalledWith('fieldType1', { id: 'field1' });
		expect(fieldFactory).toHaveBeenCalledWith('fieldType2', { id: 'field2' });
	});
});
