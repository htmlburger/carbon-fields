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
		if ( this.ownerDocument ) {
			this.ownerDocument.removeEventListener( 'mousedown', this.handleOutsideClick, true );
		}

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

		this.ownerDocument = instance.element.ownerDocument;
		this.ownerDocument.addEventListener( 'mousedown', this.handleOutsideClick, true );
	}

	/**
	 * Closes the calendar when clicking outside of the field or the
	 * (reparented) calendar itself.
	 *
	 * @param  {Object} event
	 * @return {void}
	 */
	handleOutsideClick = ( event ) => {
		if ( ! this.picker || ! this.picker.isOpen ) {
			return;
		}

		const { element, calendarContainer } = this.picker;

		if ( element.contains( event.target ) || ( calendarContainer && calendarContainer.contains( event.target ) ) ) {
			return;
		}

		this.picker.close();
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

		const inputIconClass = `cf-datetime__input--${ icon || 'calendar' }`;

		return (
			<Flatpickr
				options={ {
					...field.picker_options,
					wrap: true,
					static: true,
					altInputClass: `cf-datetime__input ${ inputIconClass }`
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
					className={ `cf-datetime__input ${ inputIconClass }` }
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
