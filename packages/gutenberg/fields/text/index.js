/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { TextControl } from '@wordpress/components';

/**
 * Renders the field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {string}   props.value
 * @param  {Function} props.onChange
 * @return {Object}
 */
const TextField = ( {
	field,
	value,
	onChange
} ) => {
	return (
		<TextControl
			label={ field.label }
			value={ value }
			onChange={ ( value ) => onChange( field.base_name, value ) } // eslint-disable-line no-shadow
		/>
	);
};

addFilter( 'carbon-fields.text-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalTextField ) => ( originalProps ) => {
	return (
		<OriginalTextField { ...originalProps }>
			{ ( { handleChange } ) => (
				<TextField
					field={ originalProps.field }
					value={ originalProps.value }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextField>
	);
} );
