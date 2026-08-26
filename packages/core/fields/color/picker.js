/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { Popover } from '@wordpress/components';
import { SketchPicker } from 'react-color';

class Picker extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			anchor,
			color,
			onChange,
			disableAlpha,
			presetColors
		} = this.props;

		return (
			<Popover
				className="cf-color__picker"
				anchor={ anchor }
				placement="bottom-start"
				focusOnMount={ false }
				noArrow
			>
				<div id="carbon-color-picker-wrapper">
					<SketchPicker
						color={ color }
						onChange={ onChange }
						disableAlpha={ disableAlpha }
						presetColors={ presetColors }
					/>
				</div>
			</Popover>
		);
	}
}

export default Picker;
