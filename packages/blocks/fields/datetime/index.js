/**
 * External dependencies.
 */
import { format } from '@wordpress/date';
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './style.scss';

class DateTimeField extends Component {
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
			value,
			field
		} = this.props;

		const formattedDate = format( field.storage_format, selectedDateStr );

		if ( formattedDate !== value ) {
			onChange( id, formattedDate );
		}
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { handleChange } = this;
		const { children } = this.props;

		return children( {
			handleChange
		} );
	}
}

addFilter( 'carbon-fields.date_time.block', 'carbon-fields/blocks', ( OriginalDateTimeField ) => ( props ) => {
	return (
		<DateTimeField { ...props }>
			{ ( {
				handleChange
			} ) => (
				<OriginalDateTimeField
					buttonText={ __( 'Select Date', 'carbon-fields-ui' ) }
					{ ...props }
					onChange={ handleChange }
				/>
			) }
		</DateTimeField>
	);
} );

addFilter( 'carbon-fields.date.block', 'carbon-fields/blocks', ( OriginalDateField ) => ( props ) => {
	return (
		<DateTimeField { ...props }>
			{ ( {
				handleChange
			} ) => (
				<OriginalDateField
					{ ...props }
					onChange={ handleChange }
				/>
			) }
		</DateTimeField>
	);
} );

addFilter( 'carbon-fields.time.block', 'carbon-fields/blocks', ( OriginalTimeField ) => ( props ) => {
	return (
		<DateTimeField { ...props }>
			{ ( {
				handleChange
			} ) => (
				<OriginalTimeField
					{ ...props }
					onChange={ handleChange }
				/>
			) }
		</DateTimeField>
	);
} );
