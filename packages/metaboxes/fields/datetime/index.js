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

class DatetimeField extends Component {
	handleManualInput = ( e ) => {
		const { field, onChange } = this.props;
		const value = e.target.value;

		if ( value !== field.value ) {
			onChange( field.id, value );
		}
	}

	handleReady = ( [ selectedDate ], selectedDateStr, instance ) => { // eslint-disable-line no-unused-vars
		this.props.field.picker = instance;
	}

	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { field, onChange } = this.props;

		onChange( field.id, e.target.value );
	}

	formatManualInput = ( e ) => {
		const value = e.target.value;

		this.props.field.picker.setDate( value, true );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			buttonText
		} = this.props;

		return (
			<FieldBase field={ field } >
				<Flatpickr
					className="carbon-field-group-holder"
				>
					<input
						type="text"
						name={ field.base_name }
						value={ field.value }
						onChange={ this.handleManualInput }
						onBlur={ this.formatManualInput }
						wrap={ true }
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

addFilter( 'carbon-fields.date_time-field.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => withField( ( props ) => {
	return (
		<OriginalDatetimeField { ...props }>
			{ ( { field, handleChange } ) => {
				return (
					<DatetimeField
						field={ field }
						onChange={ handleChange }
						buttonText={ __( 'Select Date' ) }
					/>
				);
			} }
		</OriginalDatetimeField>
	);
} ) );
