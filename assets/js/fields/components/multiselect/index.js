/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
	compose,
	withHandlers,
	branch,
	renderComponent,
	setStatic
} from 'recompose';
import Select from 'react-select';
import $ from 'jquery';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_MULTISELECT } from 'fields/constants';

/**
 * Render a collection of checkbox inputs.
 *
 * @param  {Object}        props
 * @param  {Object}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const MultiselectField = ({
	name,
	field,
	handleChange
}) => {
	return (
		<Field field={field}>
			<Select
				name={name}
				multi
				joinValues={true}
				delimiter={field.valueDelimiter}
				value={field.value}
				options={field.options}
				disabled={!field.ui.is_visible}
				onChange={handleChange}
			/>
		</Field>
	);
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
MultiselectField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		valueDelimiter: PropTypes.string,
		value: PropTypes.arrayOf(PropTypes.string),
		options: PropTypes.arrayOf(PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		})),
	}),
	handleChange: PropTypes.func
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Connect to the Redux store.
	 */
	withStore(),

	/**
	 * Render "No-Options" component when the field doesn't have options.
	 */
	branch(
		/**
		 * Test to see if the "No-Options" should be rendered.
		 */
		({ field: { options } }) => options && options.length,

		/**
		 * Render the actual field.
		 */
		compose(
			/**
			 * Attach the setup hooks.
			 */
			withSetup(),

			/**
			 * Pass some handlers to the component.
			 */
			withHandlers({
				handleChange: ({ field, setFieldValue }) => value => setFieldValue(field.id, value.map(item => item.value))
			}),
		),

		/**
		 * Render the empty component.
		 */
		renderComponent(NoOptions)
	)
);

export default setStatic('type', [
	TYPE_MULTISELECT,
])(enhance(MultiselectField));
