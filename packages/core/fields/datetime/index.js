/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import Flatpickr from 'react-flatpickr';

/**
 * The internal dependencies.
 */
import './style.scss';
import FieldBase from '../../components/field-base';

class DatetimeField extends Component {
	/**
	 * Handles the intialization of the flatpickr component.
	 *
	 * @param  {Object} selectedDateObject
	 * @param  {string} selectedDateString
	 * @param  {Object} instance
	 * @return {void}
	 */
	handleReady = (
		[ selectedDateObject ], // eslint-disable-line no-unused-vars
		selectedDateString = '', // eslint-disable-line no-unused-vars
		instance
	) => {
		this.props.field.picker = instance;
	}

	/**
	 * Handles the blur event of the date input element.
	 *
	 * @param  {Object} e
	 * @param  {string} id
	 * @return {void}
	 */
	handleManualInput = ( e ) => {
		const {
			field,
			id,
			onChange
		} = this.props;

		const value = e.target.value;

		if ( value !== field.value ) {
			onChange( id, value );
		}
	}

	/**
	 * Handles the blur event of the date input element.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	formatManualInput = ( e ) => {
		const value = e.target.value;

		this.props.field.picker.setDate( value, true );
	}

	/**
	 * Handles the change of the flatpickr component.
	 *
	 * @param  {Object} selectedDateObject
	 * @param  {string} selectedDateString
	 * @param  {Object} instance
	 * @return {void}
	 */
	handleChange = (
		[ selectedDateObject ], // eslint-disable-line no-unused-vars
		selectedDateString = '',
		instance // eslint-disable-line no-unused-vars
	) => {
		const {
			field,
			id,
			onChange
		} = this.props;

		if ( selectedDateString !== field.value ) {
			onChange( id, selectedDateString );
		}
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			field,
			name,
			value,
			buttonText
		} = this.props;

		return (
			<FieldBase field={ field }>
				<Flatpickr
					options={ {
						...field.picker_options,
						wrap: true
					} }
					value={ value }
					onReady={ this.handleReady }
					onChange={ this.handleChange }
					className="carbon-field-group-holder"
				>
					<input
						type="text"
						id={ id }
						name={ name }
						value={ value }
						onChange={ this.handleManualInput }
						onBlur={ this.formatManualInput }
						className="regular-text carbon-field-group-input"
						data-input
						{ ...field.attributes }
					/>

					<button
						type="button"
						className="button"
						data-toggle
					>
						{ buttonText }
					</button>
				</Flatpickr>
			</FieldBase>
		);
	}
}

export default DatetimeField;
