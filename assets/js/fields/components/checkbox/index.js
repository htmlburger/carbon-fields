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
	return <Field field={field}>
		<label>
			<input
				type="checkbox"
				name={name}
				value={field.option_value}
				checked={checked}
				disabled={!field.ui.is_visible}
				onChange={handleChange} />

			{field.option_label}
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
		value: PropTypes.string,
		option_value: PropTypes.string,
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
		checked: field.value === field.option_value,
	})),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ field, updateField }) => ({ target }) => {
			updateField(field.id, {
				value: target.checked ? field.option_value : null,
			});
		},
	})
);

export default setStatic('type', [
	TYPE_CHECKBOX,
])(enhance(CheckboxField));
