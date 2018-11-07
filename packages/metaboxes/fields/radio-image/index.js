/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withField from '../../components/with-field';
import { RadioField } from '../radio';

addFilter( 'carbon-fields.radio_image-field.metabox', 'carbon-fields/metaboxes', ( OriginalRadioImageField ) => withField( ( props ) => {
	return (
		<OriginalRadioImageField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => (
				<RadioField
					field={ {
						...field,
						options: field.options.map( ( option ) => ( {
							...option,
							label: ( <img src={ option.label } /> )
						} ) )
					} }
					name={ name }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalRadioImageField>
	);
} ) );
