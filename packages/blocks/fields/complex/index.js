/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import {
	BaseControl,
	DropdownMenu,
	Button
} from '@wordpress/components';

/**
 * The internal dependencies.
 */
import renderFields from '../../utils/render-fields';

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
	value,
	onChange,
	hasGroups,
	onAdd,
	getAddLabel
} ) => {
	const button = hasGroups()
		? (
			<DropdownMenu
				icon="plus"
				label={ getAddLabel() }
				controls={ field.groups.map( ( group ) => ( {
					title: getAddLabel( group.label ? group.label : field.labels.singular_name ),
					onClick: () => onAdd( group.group_id )
				} ) ) }
			/>
		)
		: (
			<Button isDefault onClick={ () => onAdd( field.groups[ 0 ].group_id ) }>
				{ getAddLabel( field.labels.singular_name ) }
			</Button>
		);

	return (
		<BaseControl label={ field.labels.plural_name }>
			{ value.length === 0 && button }

			{
				// TODO Fix renderFields function - properly pass depth
			}
			{ value.length > 0 && value.map( ( entry ) => renderFields( entry.fields, field.attributes, onChange, 1 ) ) }
		</BaseControl>
	);
};

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( originalProps ) => {
	return (
		<OriginalComplexField { ...originalProps }>
			{ ( {
				handleChange,
				hasGroups,
				getAddLabel,
				handleAdd
			} ) => (
				<ComplexField
					field={ originalProps.field }
					value={ originalProps.value }
					onChange={ handleChange }
					hasGroups={ hasGroups }
					getAddLabel={ getAddLabel }
					onAdd={ handleAdd }
				/>
			) }
		</OriginalComplexField>
	);
} );
