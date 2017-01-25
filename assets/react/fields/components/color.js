/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers, withState } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import Colorpicker from 'fields/components/colorpicker';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a color input field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Boolean}  props.pickerVisible
 * @param  {Function} props.handleChange
 * @param  {Function} props.showPicker
 * @param  {Function} props.hidePicker
 * @return {React.Element}
 *
 * TODO: Fix translation of 'Select a color' label.
 * TODO: Replace inline styles with classes.
 */
export const ColorField = ({ name, field, pickerVisible, handleChange, showPicker, hidePicker }) => {
	return <Field field={field}>
		<div className="carbon-color">
			<span className="pickcolor button carbon-color-button hide-if-no-js">
				<span className="carbon-color-preview" style={{ backgroundColor: field.value }}></span>

				<span className="carbon-color-button-text" onClick={showPicker}>Select a Color</span>
			</span>

			<Colorpicker
				visible={pickerVisible}
				value={field.value}
				onChange={handleChange}
				onClose={hidePicker} />

			<input
				type="hidden"
				id={field.id}
				name={name}
				value={field.value}
				readOnly />
		</div>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ColorField.propTypes = {
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string,
	}).isRequired,
	pickerVisible: PropTypes.bool.isRequired,
	handleChange: PropTypes.func.isRequired,
	showPicker: PropTypes.func.isRequired,
	hidePicker: PropTypes.func.isRequired,
};

/**
 * Sync the value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleChange = ({ field, updateField }) => ({ hex }) => {
	updateField(field.id, {
		value: hex
	});
};

/**
 * Toggle the colorpicker.
 *
 * @param  {Object}   props
 * @param  {Function} props.setPickerVisibility
 * @return {Function}
 */
const showPicker = ({ setPickerVisibility }) => () => setPickerVisibility(true);
const hidePicker = ({ setPickerVisibility }) => () => setPickerVisibility(false);

export default compose(
	withStore(),
	withSetup(),
	withState('pickerVisible', 'setPickerVisibility', false),
	withHandlers({ handleChange, showPicker, hidePicker })
)(ColorField);
