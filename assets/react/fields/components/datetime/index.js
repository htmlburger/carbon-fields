/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers, withState, withProps, setStatic } from 'recompose';
import { isString } from 'lodash';

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
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {String}   props.picker
 * @param  {Function} props.handleChange
 * @return {React.Element}
 *
 * TODO: Fix the translation of the button's text.
 */
export const DateTimeField = ({ name, field, picker, options, handleChange }) => {
	return <Field field={field}>
		<DateTimePicker
			type={picker}
			options={options}
			defaultValue={field.value}
			storageFormat={field.storage_format_js}>
				<div className="carbon-field-group-holder">
					<input
						type="text"
						id={field.id}
						disabled={!field.ui.is_visible}
						className="regular-text carbon-field-group-input"
						onChange={handleChange} />

					<input
						type="hidden"
						name={name}
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
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
	}).isRequired,
	options: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
};

/**
 * The additional props that will be passed to the component.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @return {Object}
 */
const props = ({ name, field, handleChange }) => {
	const defaults = {
		altField: `input[name="${name}"]`,
		onSelect: handleChange,
	};

	if (field.timepicker_options) {
		return {
			picker: field.timepicker_type,
			options: {
				...field.interval_step,
				...field.restraints,
				...field.datepicker_options,
				...field.timepicker_options,
				...defaults,
				showTime: false,
				buttonText: 'Select Time',
			},
		};
	}

	return {
		picker: 'datepicker',
		options: {
			...field.datepicker_options,
			...defaults,
			buttonText: 'Select Date',
		},
	};
};

/**
 * Sync the input value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleChange = ({ field, updateField }) => eventOrDate => {
	let value;

	if (isString(eventOrDate)) {
		value = eventOrDate;
	} else {
		value = eventOrDate.target.value;
	}

	updateField(field.id, { value });
};

export default setStatic('type', [
	TYPE_DATE,
	TYPE_DATETIME,
	TYPE_TIME
])(
	compose(
		withStore(),
		withSetup(),
		withHandlers({ handleChange }),
		withProps(props)
	)(DateTimeField)
);
