/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import { SelectField } from '../select';

addFilter( 'carbon-fields.gravity_form-field.block', 'carbon-fields/blocks', ( OriginalSelectField ) => ( originalProps ) => {
	return (
		<OriginalSelectField>
			{ () => <SelectField { ...originalProps } /> }
		</OriginalSelectField>
	);
} );
