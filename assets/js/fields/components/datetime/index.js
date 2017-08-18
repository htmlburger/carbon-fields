/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import { head, isUndefined } from 'lodash';
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
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_DATE, TYPE_DATETIME, TYPE_TIME } from 'fields/constants';

/**
 * Render an input with a datepicker.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Object}        props.options
 * @param  {String}        props.buttonText
 * @return {React.Element}
 */
export const DateTimeField = ({
	name,
	field,
	options,
	buttonText,
	handleManualInput,
	formatManualInput,
}) => {
	return <Field field={field}>
		<Flatpickr options={options} className="carbon-field-group-holder">
			<input
				type="text"
				name={name}
				value={field.value}
				disabled={!field.ui.is_visible}
				onChange={handleManualInput}
				onBlur={formatManualInput}
				className="regular-text carbon-field-group-input"
				data-input
				{...field.attributes} />

			<button
				type="button"
				className="button"
				data-toggle>
					{buttonText}
			</button>
		</Flatpickr>
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
		attributes: PropTypes.object,
		picker_options: PropTypes.object,
		picker: PropTypes.object,
	}),
	options: PropTypes.object,
	buttonText: PropTypes.string,
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
	withSetup({
		componentWillReceiveProps(nextProps) {
			const { field } = nextProps;

			if (!field.picker) {
				return;
			}

			field.picker.setDate(field.value, false);
		},
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleReady: ({ field, setFieldValue }) => ([ selectedDate ], selectedDateStr, instance) => {
			field.picker = instance;
		},

		handleManualInput: ({ field, setFieldValue }) => e => {
			let value = e.target.value;
			if (value !== field.value) {
				setFieldValue(field.id, value);
			}
		},

		formatManualInput: ({ field, setFieldValue }) => e => {
			let value = e.target.value;
			field.picker.setDate(value, true);
		},

		handleChange: ({ field, setFieldValue }) => ([ selectedDate ], selectedDateStr, instance) => {
			instance._selectedDateStr = selectedDateStr;

			const value = selectedDateStr
				? selectedDateStr
				: '';

			if (value !== field.value) {
				setFieldValue(field.id, value);
			}
		},

		handleClose: () => (selectedDates, selectedDateStr, instance) => {
			const { config, _selectedDateStr } = instance;
			const { value } = instance._input;

			if (value) {
				instance.setDate(value, true);
			} else {
				instance.clear();
			}
		},
	}),

	/**
	 * Pass some props to the component.
	 */
	withProps(({ field, handleReady, handleManualInput, formatManualInput, handleChange, handleClose }) => {
		const buttonText = field.type === TYPE_TIME
			? carbonFieldsL10n.field.selectTime
			: carbonFieldsL10n.field.selectDate;

		const options = {
			...field.picker_options,
			wrap: true,
			onReady: handleReady,
			onChange: handleChange,
			onClose: handleClose,
		};

		return {
			options,
			buttonText,
			handleManualInput,
			formatManualInput,
		};
	}),
);

export default setStatic('type', [
	TYPE_DATE,
	TYPE_DATETIME,
	TYPE_TIME
])(enhance(DateTimeField));
