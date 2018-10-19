/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { CheckboxControl } from '@wordpress/components';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const CheckboxField = ( {
	field,
	value,
	onChange
} ) => {
	// eslint-disable-next-line no-shadow
	const handleChange = ( value ) => onChange( {
		[ field.base_name ]: value
	} );

	return (
		<CheckboxControl
			label={ field.option_label }
			checked={ value }
			onChange={ handleChange }
		/>
	);
};

addFilter( 'carbon-fields.checkbox-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalCheckboxField ) => ( originalProps ) => {
	return (
		<OriginalCheckboxField>
			{ () => <CheckboxField { ...originalProps } /> }
		</OriginalCheckboxField>
	);
} );
