/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha';
import {
	compose,
	withHandlers,
	withState,
	withProps,
	setStatic
} from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import DateTimePicker from 'fields/components/datetime/picker';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_DATE, TYPE_DATETIME, TYPE_TIME } from 'fields/constants';

/**
 * Render an input with a datepicker.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {String}        props.picker
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const DateTimeField = ({
	name,
	field,
	picker,
	options,
	handleChange
}) => {
	return <Field field={field}>
		<DateTimePicker
			type={picker}
			options={options}
			value={field.value}
			storageFormat={field.storage_format}
			onChange={handleChange}>
				<div className="carbon-field-group-holder">
					<input
						type="text"
						id={field.id}
						disabled={!field.ui.is_visible}
						className="regular-text carbon-field-group-input" />

					<input
						type="hidden"
						name={name}
						value={field.value}
						disabled={!field.ui.is_visible} />
				</div>
			</DateTimePicker>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
DateTimeField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
	}),
	options: PropTypes.object,
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
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ field, updateField }) => date => {
			let value;

			if (date) {
				value = fecha.format(date, field.storage_format);
			} else {
				value = '';
			}

			updateField(field.id, { value });
		},
	}),

	/**
	 * Pass some props to the component.
	 */
	withProps(({ name, field, handleChange }) => {
		const buttonText = field.type === TYPE_TIME
			? carbonFieldsL10n.field.selectTime
			: carbonFieldsL10n.field.selectDate;

		if (field.picker_options) {
			return {
				picker: field.picker_type,
				options: {
					...field.interval_step,
					...field.restraints,
					...field.picker_options,
					buttonText,
					showTime: false,
				},
			};
		}

		return {
			picker: 'datepicker',
			options: {
				...field.picker_options,
				buttonText,
			},
		};
	}),
);

export default setStatic('type', [
	TYPE_DATE,
	TYPE_DATETIME,
	TYPE_TIME
])(enhance(DateTimeField));
