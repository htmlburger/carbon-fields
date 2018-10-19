/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { RadioControl } from '@wordpress/components';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const RadioField = ( {
	field,
	value,
	onChange
} ) => {
	// eslint-disable-next-line no-shadow
	const handleChange = ( value ) => onChange( {
		[ field.base_name ]: value
	} );

	return (
		<RadioControl
			label={ field.label }
			selected={ value }
			options={ field.options }
			onChange={ handleChange }
		/>
	);
};

addFilter( 'carbon-fields.radio-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalRadioField ) => ( originalProps ) => {
	return (
		<OriginalRadioField>
			{ () => <RadioField { ...originalProps } /> }
		</OriginalRadioField>
	);
} );
