/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { get } from 'lodash';

/**
 * Internal dependencies.
 */
import './style.scss';
import Picker from './picker';
import { hexToRgba, rgbaToHex } from '../../utils/hex-and-rgba';

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
	getBackgroundColor = () => {
		const { field, value } = this.props;

		const colorHex = value ? value : '#FFFFFFFF';
		const [ r, g, b, a ] = hexToRgba( colorHex );
		const rgbaColor = { r, g, b, a: field.alphaEnabled ? a : 1 };

		return `rgba(${ Object.values( rgbaColor ).join( ', ' ) })`;
	}

	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} [color]
	 * @return {void}
	 */
	handleChange = ( color ) => {
		const { id, onChange, field } = this.props;

		let value = get( color, 'hex', '' ).toUpperCase();

		if ( field.alphaEnabled ) {
			value = rgbaToHex( get( color, 'rgb', null ) );
		}

		onChange( id, value );
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
					<span className="cf-color__preview" style={ { backgroundColor: this.getBackgroundColor() } }></span>

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
