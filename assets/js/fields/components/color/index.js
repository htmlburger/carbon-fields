/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
	compose,
	withHandlers,
	withState,
	setStatic
} from 'recompose';
import color from 'hex-and-rgba';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import Colorpicker from 'fields/components/color/picker';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_COLOR } from 'fields/constants';

/**
 * Render a color input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Boolean}       props.pickerVisible
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.showPicker
 * @param  {Function}      props.hidePicker
 * @return {React.Element}
 */
export const ColorField = ({
	name,
	field,
	pickerVisible,
	handleChange,
	showPicker,
	hidePicker,
	clearValue
}) => {
	const colorHex = field.value ? field.value : '#FFFFFFFF';
	const [r, g, b, a] = color.hexToRgba(colorHex);
	const rgbaColor = { r, g, b, a: field.alphaEnabled ? a : 1 };
	const backgroundStyle = field.value.length > 0
		? { backgroundColor: `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${rgbaColor.a})` }
		: {};

	return <Field field={field}>
		<div className="carbon-color">
			<span className="pickcolor button carbon-color-button hide-if-no-js" onClick={showPicker}>
				<span className="carbon-color-preview-holder">
					<span className="carbon-color-preview" style={backgroundStyle}>
					</span>
				</span>

				<span className="carbon-color-button-text">{carbonFieldsL10n.field.colorSelectColor}</span>
			</span>

			<Colorpicker
				visible={pickerVisible}
				enableAlpha={field.alphaEnabled}
				palette={field.palette}
				value={rgbaColor}
				onChange={handleChange}
				onClose={hidePicker} />

			<span className="button carbon-color-button carbon-color-clear-button" onClick={clearValue}>
				<span className="dashicons dashicons-no"></span>
			</span>

			<input
				type="hidden"
				id={field.id}
				name={name}
				value={field.value}
				disabled={!field.ui.is_visible}
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
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		alphaEnabled: PropTypes.bool,
		palette: PropTypes.arrayOf(PropTypes.string),
	}),
	pickerVisible: PropTypes.bool,
	handleChange: PropTypes.func,
	showPicker: PropTypes.func,
	hidePicker: PropTypes.func,
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
	 * Control the visibility of the colorpicker.
	 */
	withState('pickerVisible', 'setPickerVisibility', false),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ field, setFieldValue }) => ({ rgb }) => {
			let hexWithAlpha = color.rgbaToHex(rgb.r, rgb.g, rgb.b, rgb.a).toUpperCase();
			if (!field.alphaEnabled) {
				hexWithAlpha = hexWithAlpha.substr(0, 7);
			}
			setFieldValue(field.id, hexWithAlpha);
		},
		showPicker: ({ setPickerVisibility }) => () => setPickerVisibility(true),
		hidePicker: ({ setPickerVisibility }) => () => setPickerVisibility(false),
		clearValue: ({ field, setFieldValue }) => () => setFieldValue(field.id, ''),
	}),
);

export default setStatic('type', [
	TYPE_COLOR,
])(enhance(ColorField));
