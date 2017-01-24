import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { SketchPicker } from 'react-color';
import { compose, withHandlers } from 'recompose';

/**
 * Render a colorpicker popover.
 *
 * @param  {Object}    props
 * @param  {Boolean}   props.visible
 * @param  {String}    props.value
 * @param  {Function}  props.handleChange
 * @param  {Function}  props.handleClickOutside
 * @return {React.Element}
 */
export const Colorpicker = ({ visible, value, handleChange, handleClickOutside }) => {

	const popover = {
		position: 'absolute',
		zIndex: 9999
	};

	return 	<div style={popover} hidden={!visible}>

			<SketchPicker
				color={value}
				onChange={handleChange}
				presetColors={[]} />
		</div>
};

/**
 * Toggle colopicker visibility
 *
 * @param  {Object}    props
 * @param  {Boolean}   props.visible 
 * @param  {Function}  props.onClose 
 * @return {Function}
 */
const handleClickOutside = ({ visible, onClose }) => e => visible && onClose();

/**
 * Handle color change
 *
 * @param  {Object}    props
 * @param  {Function}  props.onChange 
 * @return {Function}
 */
const handleChange = ({ onChange }) => color => onChange(color);

export default compose(
	withHandlers({ handleClickOutside, handleChange }),
	onClickOutside
)(Colorpicker);