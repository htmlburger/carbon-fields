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
	lifecycle,
	withState,
	setStatic
} from 'recompose';
import Select from '../select/StyledSelect';

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
 * @return {React.Element}
 */
export const MultiselectField = ({
	name,
	field,
	setFieldValue
}) => {
	let args = {
		name,
		field,
		setFieldValue,
		delimiter:field.valueDelimiter,
		isMulti: true
	}

	return (
		<Field field={field}>
			<Select { ...args} />
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
	withState('parsedValue', 'setParsedValue'),

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
			withHandlers(),
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
