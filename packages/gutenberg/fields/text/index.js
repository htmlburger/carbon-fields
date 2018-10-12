/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { TextControl } from '@wordpress/components';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const TextField = ( {
	field,
	value,
	onChange
} ) => {
	// eslint-disable-next-line no-shadow
	const handleChange = ( value ) => onChange( {
		[ field.base_name ]: value
	} );

	return (
		<TextControl
			label={ field.label }
			value={ value }
			onChange={ handleChange }
		/>
	);
};

addFilter( 'carbon-fields.text-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalTextField ) => ( originalProps ) => {
	return (
		<OriginalTextField>
			{ () => <TextField { ...originalProps } /> }
		</OriginalTextField>
	);
} );
