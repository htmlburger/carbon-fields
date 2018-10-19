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
const RadioImageField = ( {
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
			options={ field.options.map( ( option ) => ( {
				value: option.value,
				label: ( <img src={ option.label } /> )
			} ) ) }
			onChange={ handleChange }
		/>
	);
};

addFilter( 'carbon-fields.radio_image-field.block', 'carbon-fields/blocks', ( OriginalRadioImageField ) => ( originalProps ) => {
	return (
		<OriginalRadioImageField>
			{ () => <RadioImageField { ...originalProps } /> }
		</OriginalRadioImageField>
	);
} );
