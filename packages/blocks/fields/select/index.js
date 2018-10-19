/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { SelectControl } from '@wordpress/components';

/**
 * Renders the field.
 *
 * @return {Object}
 */
export const SelectField = ( {
	field,
	value,
	onChange
} ) => {
	// eslint-disable-next-line no-shadow
	const handleChange = ( value ) => onChange( {
		[ field.base_name ]: value
	} );

	return (
		<SelectControl
			label={ field.label }
			selected={ value }
			options={ field.options }
			onChange={ handleChange }
		/>
	);
};

addFilter( 'carbon-fields.select-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalSelectField ) => ( originalProps ) => {
	return (
		<OriginalSelectField>
			{ () => <SelectField { ...originalProps } /> }
		</OriginalSelectField>
	);
} );
