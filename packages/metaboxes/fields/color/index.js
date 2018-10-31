/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { SketchPicker } from 'react-color';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';
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
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		[
			'click',
			'touchend'
		].map( ( event ) => document.addEventListener( event, this.handleClickOutside ) );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		[
			'click',
			'touchend'
		].map( ( event ) => document.removeEventListener( event, this.handleClickOutside ) );
	}

	/**
	 * Handles clicking outside of the color picker component
	 *
	 * @param {Object} e
	 * @return {void}
	 */
	handleClickOutside = ( e ) => {
		// No action if picker is hidden
		if ( ! this.state.showPicker || e.target.classList.contains( 'pickcolor' ) ) {
			return;
		}

		const ids = e.path.map( ( node ) => node.id )
			.filter( ( id ) => id );

		if ( ids.indexOf( 'carbon-color-picker-wrapper' ) === -1 ) {
			return this.togglePicker();
		}
	}

	/**
	 * Returns the RGBA format of the currently set color
	 *
	 * @return {void}
	 */
	getBackgrounColor = () => {
		const { field } = this.props;

		const colorHex = field.value ? field.value : '#FFFFFFFF';
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
		const { field, onChange } = this.props;

		onChange( field.id, hex );
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
		const { field } = this.props;

		return (
			<FieldBase field={ field }>
				<div className="carbon-color">
					<span
						onClick={ this.togglePicker }
						className="pickcolor carbon-color-preview-holder hide-if-no-js"
						style={ {
							display: 'inline-block',
							backgroundColor: this.getBackgrounColor(),
							width: 30,
							height: 30,
							border: '1px solid #000',
							marginRight: 10
						} }
					>
					</span>

					<span
						className="button pickcolor carbon-color-button hide-if-no-js"
						onClick={ this.togglePicker }
					>
						{ carbonFieldsL10n.field.colorSelectColor }
					</span>

					{ showPicker && (
						<div
							id="carbon-color-picker-wrapper"
							style={ { position: 'absolute', zIndex: 9999 } }
						>
							<SketchPicker
								color={ field.value }
								onChange={ this.handleChange }
								disableAlpha={ ! field.alphaEnabled }
								presetColors={ field.palette }
							/>
						</div>
					) }

					<span className="button carbon-color-button carbon-color-clear-button" onClick={ () => this.handleChange() }>
						<span className="dashicons dashicons-no"></span>
					</span>

					<input
						type="hidden"
						id={ field.id }
						name={ field.base_name }
						value={ field.value }
					/>
				</div>
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.color-field.metabox', 'carbon-fields/metaboxes', ( OriginalColorField ) => withField( ( props ) => {
	return (
		<OriginalColorField { ...props }>
			{ ( { field, handleChange } ) => (
				<ColorField
					field={ field }
					onChange={ handleChange }
				/>
			) }
		</OriginalColorField>
	);
} ) );
