import React from 'react';
import cx from 'classnames';
import { SketchPicker } from 'react-color';
import { compose, withHandlers, withState } from 'recompose';

import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { registerFieldComponent } from 'lib/registry';

/**
 * Render a color input field.
 *
 * @param  {Object}   props
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
export const ColorField = ({ field, pickerVisible, handleInputChange, showPicker, hidePicker }) => {
	const cover = {
		position: 'fixed',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	};

	const popover = {
		position: 'absolute',
		zIndex: 9999,
		display: pickerVisible ? 'block' : 'none',
	};

	return <Field field={field}>
		<div className="carbon-color">
			<span className="pickcolor button carbon-color-button hide-if-no-js">
				<span className="carbon-color-preview" style={{ backgroundColor: field.value }}></span>

				<span className="carbon-color-button-text" onClick={showPicker}>Select a Color</span>
			</span>

			<div style={popover}>
				<div style={cover} onClick={hidePicker} />

				<SketchPicker
					color={field.value || ''}
					onChange={handleInputChange}
					presetColors={[]} />
			</div>

			<input
				type="hidden"
				id={field.id}
				name={field.name}
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

export default registerFieldComponent('Color', compose(
	withStore(),
	withSetup(),
	withState('pickerVisible', 'setPickerVisibility', false),
	withHandlers({ handleInputChange, showPicker, hidePicker })
)(ColorField));
