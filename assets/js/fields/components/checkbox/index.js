/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
	compose,
	withProps,
	withHandlers,
	setStatic
} from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_CHECKBOX } from 'fields/constants';

/**
 * Render a checkbox input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Boolean}       props.checked
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const CheckboxField = ({
	name,
	field,
	checked,
	handleChange
}) => {
	return <Field field={field} showLabel={false} showRequiredLabel={false}>
		<label>
			<input
				type="checkbox"
				name={name}
				value={field.option_value}
				checked={checked}
				disabled={!field.ui.is_visible}
				onChange={handleChange}
				{...field.attributes} />

			{field.option_label}
			{
				field.required
				? <span className="carbon-required">*</span>
				: null
			}
		</label>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
CheckboxField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.bool,
		option_value: PropTypes.string,
		attributes: PropTypes.object,
	}),
	checked: PropTypes.bool,
	handleChange: PropTypes.func,
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
	 * Attach the setup hooks.
	 */
	withSetup(),

	/**
	 * Pass some props to the component.
	 */
	withProps(({ field }) => ({
		checked: field.value,
	})),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ field, setFieldValue }) => ({ target }) => {
			setFieldValue(field.id, target.checked);
		},
	})
);

export default setStatic('type', [
	TYPE_CHECKBOX,
])(enhance(CheckboxField));
