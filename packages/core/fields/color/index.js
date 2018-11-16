/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';
import Picker from './picker';
import FieldBase from '../../components/field-base';
import hexToRgba from '../../utils/hex-to-rgba';

class ColorField extends Component {
	/**
	 * Defines the initial state
	 *
	 * @return {void}
	 */
	constructor() {
		super();

		this.state = {
			showPicker: false
		};
	}

	/**
	 * Returns the RGBA format of the currently set color
	 *
	 * @return {void}
	 */
	getBackgrounColor = () => {
		const { field, value } = this.props;

		const colorHex = value ? value : '#FFFFFFFF';
		const [ r, g, b, a ] = hexToRgba( colorHex );
		const rgbaColor = { r, g, b, a: field.alphaEnabled ? a : 1 };

		return `rgba(${ Object.values( rgbaColor ).join( ', ' ) })`;
	}

	/**
	 * Handles the change of the input.
	 *
	 * @param {Object|Null} color
	 * @param {string}      hex
	 * @return {void}
	 */
	handleChange = ( { hex = null } = {} ) => {
		const { id, onChange } = this.props;

		onChange( id, hex );
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
			field,
			value
		} = this.props;

		return (
			<FieldBase id={ id } field={ field } >
				<input
					type="hidden"
					id={ id }
					name={ name }
					value={ value }
				/>

				<div className="cf-color__inner">
					<button type="button" className="button cf-color__toggle" onClick={ this.togglePicker }>
						<span className="cf-color__preview" style={ { backgroundColor: this.getBackgrounColor() } }></span>

						<span className="cf-color__toggle-text">
							{ carbonFieldsL10n.field.colorSelectColor }
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
			</FieldBase>
		);
	}
}

export default ColorField;
