/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import { DatetimeField } from '../datetime';
import withField from '../../components/with-field';

addFilter( 'carbon-fields.date-field.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => withField( ( props ) => {
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
