/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { BaseControl } from '@wordpress/components';

/**
 * Renders the field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {string}   props.value
 * @param  {Function} props.onChange
 * @return {Object}
 */
const ComplexField = ( {
	field
} ) => {
	return (
		<BaseControl label={ field.labels.plural_name }>
		</BaseControl>
	);
};

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( originalProps ) => {
	return (
		<OriginalComplexField { ...originalProps }>
			{ ( { handleChange } ) => (
				<ComplexField
					field={ originalProps.field }
					value={ originalProps.value }
					onChange={ handleChange }
				/>
			) }
		</OriginalComplexField>
	);
} );
