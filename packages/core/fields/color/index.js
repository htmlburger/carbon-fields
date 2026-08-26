/**
 * External dependencies.
 */
import { createRef, Component } from '@wordpress/element';
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
	 * Define the project base properties
	 *
	 * @return {void}
	 */
	constructor() {
		super();

		this.node = createRef();
	}

	/**
	 * Defines the initial state.
	 *
	 * @type {Object}
	 */
	state = {
		showPicker: false
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} prevProps
	 * @param  {Object} prevState
	 * @return {void}
	 */
	componentDidUpdate( prevProps, prevState ) {
		if ( this.state.showPicker && ! prevState.showPicker ) {
			this.node.current.ownerDocument.addEventListener( 'mousedown', this.handleOutsideClick, true );
		} else if ( ! this.state.showPicker && prevState.showPicker ) {
			this.node.current.ownerDocument.removeEventListener( 'mousedown', this.handleOutsideClick, true );
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		if ( this.state.showPicker ) {
			this.node.current.ownerDocument.removeEventListener( 'mousedown', this.handleOutsideClick, true );
		}
	}

	/**
	 * Closes the picker when clicking outside of this field.
	 *
	 * @param  {Object} event
	 * @return {void}
	 */
	handleOutsideClick = ( event ) => {
		if ( this.node.current && ! this.node.current.contains( event.target ) ) {
			this.setState( { showPicker: false } );
		}
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
			<div className="cf-color__inner" ref={ this.node }>
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
						anchor={ this.node.current }
						color={ value }
						onChange={ this.handleChange }
						disableAlpha={ ! field.alphaEnabled }
						presetColors={ field.palette }
					/>
				) }

				<button type="button" className="button-link cf-color__reset" aria-label={ __( 'Clear', 'carbon-fields-ui' ) } onClick={ () => this.handleChange() }>
					<span className="dashicons dashicons-no"></span>
				</button>
			</div>
		);
	}
}

export default ColorField;
