/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import { SelectField } from '../select';
import withStore from '../../components/with-store';

addFilter( 'carbon-fields.gravity_form-field.metabox', 'carbon-fields/metaboxes', ( OriginalSelectField ) => withStore( ( props ) => {
	return (
		<OriginalSelectField { ...props }>
			{ ( { field, handleChange } ) => (
				<SelectField
					field={ field }
					onChange={ handleChange }
				/>
			) }
		</OriginalSelectField>
	);
} ) );
