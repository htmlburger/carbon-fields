/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import { RadioField } from '../radio';

addFilter( 'carbon-fields.radio_image-field.block', 'carbon-fields/blocks', ( OriginalRadioField ) => ( props ) => {
	return (
		<OriginalRadioField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => (
				<RadioField
					name={ name }
					field={ field }
					value={ value }
					options={ field.options.map( ( option ) => ( {
						value: option.value,
						label: ( <img src={ option.label } /> )
					} ) ) }
					onChange={ handleChange }
				/>
			) }
		</OriginalRadioField>
	);
} );
