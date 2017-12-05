/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { SketchPicker } from 'react-color';
import { compose, withHandlers } from 'recompose';

/**
 * Render a colorpicker popover.
 *
 * @param  {Object}        props
 * @param  {Boolean}       props.visible
 * @param  {String}        props.value
 * @param  {String[]}      props.palette
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const Colorpicker = ({
	visible,
	value,
	palette,
	enableAlpha,
	handleChange
}) => {
	const popover = {
		position: 'absolute',
		zIndex: 9999
	};

	return <div style={popover} hidden={!visible}>
		<SketchPicker
			color={value}
			onChange={handleChange}
			disableAlpha={!enableAlpha}
			presetColors={palette} />
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
Colorpicker.propTypes = {
	visible: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	palette: PropTypes.arrayOf(PropTypes.string),
	enableAlpha: PropTypes.bool,
	handleChange: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ onChange }) => color => onChange(color),
		handleClickOutside: ({ visible, onClose }) => e => visible && onClose(),
	}),

	/**
	 * Handle clicks outside the components.
	 */
	onClickOutside
);

export default enhance(Colorpicker);
