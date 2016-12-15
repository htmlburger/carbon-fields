/* @flow */

import React from 'react';
import cx from 'classnames';
import { SketchPicker } from 'react-color';
import { compose, withHandlers, withState } from 'recompose';

import Field from 'fields/components/field';
import withStore from 'fields/decorators/connect-to-store';

/**
 * Render a color input field.
 *
 * @param  {Object} props
 * @return {React.Element}
 *
 * @todo Fix translation of 'Select a color' label.
 * @todo Replace inline styles with classes.
 */
const ColorField = ({ field, updateField, setPickerVisibility, pickerVisible }: ColorFieldProps): React$Element<*> => {
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

				<span className="carbon-color-button-text" onClick={() => setPickerVisibility(true)}>Select a Color</span>
			</span>

			<div style={popover}>
				<div style={cover} onClick={() => setPickerVisibility(false)} />

				<SketchPicker
					color={field.value}
					onChange={(color) => updateField(field.id, { value: color.hex })}
					presetColors={[]} />
			</div>

			<input
				type="hidden"
				id={field.id}
				name={field.name}
				value={field.value}
				readOnly />
		</div>
	</Field>;
};

export default compose(
	withStore(),
	withState('pickerVisible', 'setPickerVisibility', false)
)(ColorField);
