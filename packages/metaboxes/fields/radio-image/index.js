/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import withStore from '../../components/with-store';
import { RadioField } from '../radio';

addFilter( 'carbon-fields.radio_image-field.metabox', 'carbon-fields/metaboxes', ( OriginalRadioImageField ) => withStore( ( props ) => {
	return (
		<OriginalRadioImageField { ...props }>
			{ ( { field, handleChange } ) => (
				<RadioField
					field={ {
						...field,
						options: field.options.map( ( { value, label } ) => ( {
							value,
							label: ( <img src={ label } /> )
						} ) )
					} }
					onChange={ handleChange }
				/>
			) }
		</OriginalRadioImageField>
	);
} ) );
