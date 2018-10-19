/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import { SelectField } from '../select';

addFilter( 'carbon-fields.gravity_form-field.gutenberg', 'carbon-fields/gutenberg', ( OriginalSelectField ) => ( originalProps ) => {
	return (
		<OriginalSelectField>
			{ () => <SelectField { ...originalProps } /> }
		</OriginalSelectField>
	);
} );
