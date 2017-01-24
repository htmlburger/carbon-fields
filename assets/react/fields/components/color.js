import React from 'react';
import { compose, withHandlers, withState } from 'recompose';

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
 * @param  {Function} props.handleInputChange
 * @param  {Function} props.showPicker
 * @param  {Function} props.hidePicker
 * @return {React.Element}
 *
 * @todo Fix translation of 'Select a color' label.
 * @todo Replace inline styles with classes.
 */
export const ColorField = ({ name, field, pickerVisible, handleInputChange, showPicker, hidePicker }) => {
	
	return <Field field={field}>
		<div className="carbon-color">
			<span className="pickcolor button carbon-color-button hide-if-no-js">
				<span className="carbon-color-preview" style={{ backgroundColor: field.value }}></span>

				<span className="carbon-color-button-text" onClick={showPicker}>Select a Color</span>
			</span>

			<Colorpicker 
				visible={pickerVisible} 
				value={field.value || ''} 
				onChange={handleInputChange} 
				onClose={hidePicker} />

			<input
				type="hidden"
				id={field.id}
				name={name}
				value={field.value || ''}
				readOnly />
		</div>
	</Field>;
};

/**
 * Sync the value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleInputChange = ({ field, updateField }) => ({ hex }) => {
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
	withHandlers({ handleInputChange, showPicker, hidePicker })
)(ColorField);
