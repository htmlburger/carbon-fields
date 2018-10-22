/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { BaseControl, DropdownMenu, Button } from '@wordpress/components';

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
	field,
	hasGroups
} ) => {
	const button = hasGroups()
		? (
			<DropdownMenu
				label="Add new"
				controls={ field.group_types.map( ( type ) => ( {
					title: type.label ? type.label : field.labels.singular_name,
					onClick: () => {}
				} ) ) }
			/>
		)
		: (
			<Button isDefault onClick={ () => {} }>
				Add new
			</Button>
		);

	return (
		<BaseControl label={ field.labels.plural_name }>
			{ button }
		</BaseControl>
	);
};

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( originalProps ) => {
	return (
		<OriginalComplexField { ...originalProps }>
			{ ( { handleChange, hasGroups } ) => (
				<ComplexField
					field={ originalProps.field }
					value={ originalProps.value }
					onChange={ handleChange }
					hasGroups={ hasGroups }
				/>
			) }
		</OriginalComplexField>
	);
} );
