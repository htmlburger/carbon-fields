/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import { SelectField } from '../select';
import withField from '../../components/with-field';

addFilter( 'carbon-fields.gravity_form-field.metabox', 'carbon-fields/metaboxes', ( OriginalSelectField ) => withField( ( props ) => {
	return (
		<OriginalSelectField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => (
				<SelectField
					field={ field }
					name={ name }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalSelectField>
	);
} ) );
