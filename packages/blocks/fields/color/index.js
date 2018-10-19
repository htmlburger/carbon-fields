/**
 * The external dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { ColorIndicator, ColorPalette } from '@wordpress/components';

/**
 * Renders the field.
 *
 * @return {Object}
 */
const ColorField = ( {
	field,
	value,
	onChange
} ) => {
	// eslint-disable-next-line no-shadow
	const handleChange = ( value ) => onChange( {
		[ field.base_name ]: value
	} );

	return (
		<div>
			<ColorPalette
				value={ value }
				onChange={ handleChange }
			/>

			<ColorIndicator colorValue={ value } />
		</div>
	);
};

addFilter( 'carbon-fields.color-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalColorField ) => ( originalProps ) => {
	return (
		<OriginalColorField>
			{ () => <ColorField { ...originalProps } /> }
		</OriginalColorField>
	);
} );
