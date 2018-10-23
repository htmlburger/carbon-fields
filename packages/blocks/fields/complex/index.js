/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { BaseControl } from '@wordpress/components';
import { get } from 'lodash';

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
				depth,
				handleChildChange,
				hasGroups,
				getAddLabel,
				handleAdd,
				getGroupFields,
				getGroupLabel
			} ) => {
				const sanitizedValue = [
					...originalProps.value.map( ( entry, index ) => ( {
						name: `${ entry._type }-${ index }`,
						title: getGroupLabel( entry._type ),
						fields: getGroupFields( entry._type ),
						attributes: get( originalProps.value, index, {} ),
						index: index
					} ) ),
					{
						name: 'add',
						title: '+'
					}
				];

				const buttonComponent = (
					<AddButton
						addLabel={ getAddLabel() }
						hasGroups={ hasGroups() }
						groups={ originalProps.field.groups }
						getLabel={ getGroupLabel }
						onClick={ handleAdd }
					/>
				);

				const fieldsComponent = (
					<Fields
						value={ sanitizedValue }
						depth={ depth }
						button={ buttonComponent }
						onChange={ handleChildChange }
					/>
				);

				return (
					<ComplexField
						field={ originalProps.field }
						value={ originalProps.value }
						addButton={ buttonComponent }
						fields={ fieldsComponent }
					/>
				);
			} }
		</OriginalComplexField>
	);
} );
