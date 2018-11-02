/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { BaseControl } from '@wordpress/components';
import { get, curry } from 'lodash';

/**
 * The internal dependencies.
 */
import AddButton from './add-button';
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
	field,
	value,
	addButton,
	fields
} ) => (
	<BaseControl label={ field.label }>
		{ value.length === 0 && addButton }

		{ value.length > 0 && fields }
	</BaseControl>
);

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( originalProps ) => {
	return (
		<OriginalComplexField { ...originalProps }>
			{ ( {
				field,
				value,
				depth,
				handleChildChange,
				hasGroups,
				getAddLabel,
				handleAdd,
				getGroupFields,
				getGroupLabel,
				handleSorting
			} ) => {
				const sanitizedValue = value.map( ( entry, index ) => ( {
					name: `${ entry._type }-${ index }`,
					title: getGroupLabel( entry._type ),
					fields: getGroupFields( entry._type ),
					attributes: get( value, index, {} ),
					index: index
				} ) );

				const curryWithFieldKey = ( callback ) => curry( callback )( field.base_name );

				const buttonComponent = (
					<AddButton
						addLabel={ getAddLabel() }
						hasGroups={ hasGroups() }
						groups={ field.groups }
						getLabel={ getGroupLabel }
						onClick={ curryWithFieldKey( handleAdd ) }
					/>
				);

				const fieldsComponent = (
					<Fields
						elementId={ field.id }
						value={ sanitizedValue }
						depth={ depth }
						button={ buttonComponent }
						onChange={ curryWithFieldKey( handleChildChange ) }
						onSort={ curryWithFieldKey( handleSorting ) }
					/>
				);

				return (
					<ComplexField
						field={ field }
						value={ value }
						addButton={ buttonComponent }
						fields={ fieldsComponent }
					/>
				);
			} }
		</OriginalComplexField>
	);
} );
