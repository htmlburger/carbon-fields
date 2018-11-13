/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import Flatpickr from 'react-flatpickr';

/**
 * The internal dependencies.
 */
import './style.scss';
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

export class DatetimeField extends Component {
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
	 * @return {void}
	 */
	handleManualInput = ( e ) => {
		const { field, onChange } = this.props;
		const value = e.target.value;

		if ( value !== field.value ) {
			onChange( field.id, value );
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
		const { field, onChange } = this.props;

		if ( selectedDateString !== field.value ) {
			onChange( field.id, selectedDateString );
		}
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			buttonText
		} = this.props;

		return (
			<FieldBase field={ field } >
				<Flatpickr
					options={ {
						...field.picker_options,
						wrap: true
					} }
					value={ value }
					onReady={ this.handleReady }
					onChange={ this.handleChange }
					className="cf-metaboxes-datetime__inner"
				>
					<input
						type="text"
						name={ name }
						value={ value }
						onChange={ this.handleManualInput }
						onBlur={ this.formatManualInput }
						className="cf-metaboxes-datetime__input"
						data-input
						{ ...field.attributes }
					/>

					<button
						type="button"
						className="button cf-metaboxes-datetime__button"
						data-toggle
					>
						{ buttonText }
					</button>
				</Flatpickr>
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.date_time-field.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => withField( ( props ) => {
	return (
		<OriginalDatetimeField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => {
				return (
					<DatetimeField
						field={ field }
						name={ name }
						value={ value }
						buttonText={ __( 'Select Date' ) }
						onChange={ handleChange }
					/>
				);
			} }
		</OriginalDatetimeField>
	);
} ) );
