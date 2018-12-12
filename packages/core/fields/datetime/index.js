/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import Flatpickr from 'react-flatpickr';

/**
 * Internal dependencies.
 */
import './style.scss';

class DateTimeField extends Component {
	/**
	 * Keeps reference to the instance of Flatpickr.
	 *
	 * @type {Object}
	 */
	picker = null;

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.picker = null;
	}

	/**
	 * Handles the intialization of the flatpickr component.
	 *
	 * @param  {Date[]} selectedDates
	 * @param  {string} selectedDateStr
	 * @param  {Object} instance
	 * @return {void}
	 */
	handleReady = ( selectedDates, selectedDateStr, instance ) => {
		this.picker = instance;
	}

	/**
	 * Handles the change.
	 *
	 * @param  {Date[]} selectedDates
	 * @param  {string} selectedDateStr
	 * @return {void}
	 */
	handleChange = ( selectedDates, selectedDateStr ) => {
		const {
			id,
			onChange,
			value
		} = this.props;

		if ( selectedDateStr !== value ) {
			onChange( id, selectedDateStr );
		}
	}

	/**
	 * Handles manual input of dates.
	 *
	 * @param  {Object} e
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
	 * Formats the date added manually.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	formatManualInput = ( e ) => {
		this.picker.setDate( e.target.value, true );
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
			icon,
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
				className={ `cf-datetime__inner dashicons-before dashicons-${ icon || 'calendar' }` }
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

export default DateTimeField;
