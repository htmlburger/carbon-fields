/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { BaseControl, DropdownMenu, Button } from '@wordpress/components';
import { get } from 'lodash';

/**
 * The internal dependencies.
 */
import Fields from './fields';

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
	depth,
	field,
	value,
	onChildChange,
	hasGroups,
	onAdd,
	getAddLabel,
	getFields,
	getGroupLabel
} ) => {
	const onTabSelect = ( tabName ) => {
		if ( tabName !== 'add' ) {
			return;
		}

		if ( ! hasGroups() ) {
			return onAdd( field.groups[ 0 ].name );
		}
	};

	const button = hasGroups()
		? (
			<DropdownMenu
				icon="plus"
				label={ getAddLabel() }
				controls={ field.groups.map( ( group ) => ( {
					title: getGroupLabel( group.name, true ),
					onClick: () => onAdd( group.name )
				} ) ) }
			/>
		)
		: (
			<Button isDefault onClick={ () => onAdd( field.groups[ 0 ].name ) }>
				{ getAddLabel( field.labels.singular_name ) }
			</Button>
		);

	const sanitizedValue = [
		...value.map( ( entry, index ) => ( {
			name: `${ entry._name }-${ index }`,
			title: getGroupLabel( entry._name ),
			fields: getFields( entry._name ),
			attributes: get( value, index, {} ),
			index: index
		} ) ),
		{
			name: 'add',
			title: '+'
		}
	];

	return (
		<BaseControl label={ field.labels.plural_name }>
			{ value.length === 0 && button }

			{ value.length > 0 && (
				<Fields
					value={ sanitizedValue }
					onSelect={ onTabSelect }
					depth={ depth }
					button={ button }
					onChange={ onChildChange }
				/>
			) }
		</BaseControl>
	);
};

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( originalProps ) => {
	return (
		<OriginalComplexField { ...originalProps }>
			{ ( {
				depth,
				handleChildChange,
				hasGroups,
				getAddLabel,
				handleAdd,
				getGroupFields,
				getGroupLabel
			} ) => {
				return (
					<ComplexField
						depth={ depth }
						field={ originalProps.field }
						value={ originalProps.value }
						onChildChange={ handleChildChange }
						hasGroups={ hasGroups }
						getAddLabel={ getAddLabel }
						onAdd={ handleAdd }
						getFields={ getGroupFields }
						getGroupLabel={ getGroupLabel }
					/>
				);
			} }
		</OriginalComplexField>
	);
} );
