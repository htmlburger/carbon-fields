/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers, withState, withProps } from 'recompose';
import { isString } from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import DateTimePicker from 'fields/components/datetimepicker';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render an input with a datepicker.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @return {React.Element}
 *
 * TODO: Fix the layout of the button.
 * TODO: Fix the translation of the button's text.
 */
export const TimeField = ({ name, field, options, handleChange }) => {
	return <div className="carbon-field-group">
		<DateTimePicker type={field.timepicker_type} options={options}>
			<input
				type="text"
				id={field.id}
				name={name}
				value={field.value}
				className="regular-text carbon-field-group-input carbon-timepicker"
				onChange={handleChange} />
		</DateTimePicker>
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
TimeField.propTypes = {
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
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @return {Object}
 */
const props = ({ field, handleChange }) => {
	return {
		options: {
			...{
				timeFormat: field.time_format,
				showTime: false,
			},

			...field.interval_step,
			...field.restraints,
			...field.timepicker_options,
			
			...{
				buttonText: 'Select Time',
				onSelect: handleChange,
			},
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

export default compose(
	withStore(),
	withSetup(),
	withHandlers({ handleChange }),
	withProps(props)
)(TimeField);
