/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import Flatpickr from 'react-flatpickr';

/**
 * The internal dependencies.
 */
import './style.scss';
import validator from '../../validators/required';

class DateTimeField extends Component {
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
			id,
			onChange,
			value
		} = this.props;

		if ( e.target.value !== value ) {
			onChange( id, e.target.value );
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
			id,
			onChange,
			value
		} = this.props;

		if ( selectedDateString !== value ) {
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
			name,
			value,
			field,
			buttonText
		} = this.props;

		return (
			<Flatpickr
				options={ {
					...field.picker_options,
					wrap: true
				} }
				value={ value }
				onReady={ this.handleReady }
				onChange={ this.handleChange }
				className="cf-datetime__inner"
			>
				<input
					type="text"
					id={ id }
					name={ name }
					value={ value }
					onChange={ this.handleManualInput }
					onBlur={ this.formatManualInput }
					className="cf-datetime__input"
					data-input
					{ ...field.attributes }
				/>

				<button type="button" className="button cf-datetime__button" data-toggle>
					{ buttonText }
				</button>
			</Flatpickr>
		);
	}
}

addFilter( 'carbon-fields.date.validate', 'carbon-fields/core', ( field, value ) => validator( value ) );
addFilter( 'carbon-fields.time.validate', 'carbon-fields/core', ( field, value ) => validator( value ) );
addFilter( 'carbon-fields.date_time.validate', 'carbon-fields/core', ( field, value ) => validator( value ) );

export default DateTimeField;
