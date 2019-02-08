/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { get } from 'lodash';
import tinycolor from 'tinycolor2';

/**
 * Internal dependencies.
 */
import './style.scss';
import Picker from './picker';

class ColorField extends Component {
	/**
	 * Defines the initial state.
	 *
	 * @type {Object}
	 */
	state = {
		showPicker: false
	}

	/**
	 * Returns the RGBA format of the currently set color
	 *
	 * @return {void}
	 */
	getBackgrounColor = () => {
		const colorHex = this.props.value || '#FFFFFFFF';

		return tinycolor( colorHex ).toRgbString();
	}

	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} [color]
	 * @return {void}
	 */
	handleChange = ( color ) => {
		const { id, field, onChange } = this.props;
		const rgb = get( color, 'rgb', '' );
		const format = field.alphaEnabled ? 'hex8' : 'hex6';

		onChange( id, rgb ? tinycolor( rgb ).toString( format ) : '' );
	}

	/**
	 * Toggles the visibility of the color picker component
	 *
	 * @return {void}
	 */
	togglePicker = () => this.setState( { showPicker: ! this.state.showPicker } )

	/**
	 * Render a color input field.
	 *
	 * @return {React.Element}
	 */
	render() {
		const { showPicker } = this.state;
		const {
			id,
			name,
			value,
			field
		} = this.props;

		return (
			<div className="cf-color__inner">
				<input
					type="hidden"
					id={ id }
					name={ name }
					value={ value }
				/>

				<button type="button" className="button cf-color__toggle" onClick={ this.togglePicker }>
					<span className="cf-color__preview" style={ { backgroundColor: this.getBackgrounColor() } }></span>

					<span className="cf-color__toggle-text">
						{ __( 'Select a color', 'carbon-fields-ui' ) }
					</span>
				</button>

				{ showPicker && (
					<Picker
						color={ value }
						onChange={ this.handleChange }
						disableAlpha={ ! field.alphaEnabled }
						presetColors={ field.palette }
						onClose={ () => showPicker ? this.togglePicker() : null }
					/>
				) }

				<button type="button" className="button-link cf-color__reset" onClick={ () => this.handleChange() }>
					<span className="dashicons dashicons-no"></span>
				</button>
			</div>
		);
	}
}

export default ColorField;
