/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import {
	BaseControl,
	DropdownMenu,
	Button,
	Panel,
	PanelBody,
	PanelRow
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
	depth,
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

			{ value.length > 0 && (
				<Panel>
					{ value.map( ( entry, index ) => (
						<PanelBody
							key={ `${ entry.groupd_id }-${ index }` }
							title={ entry.label }
							initialOpen={ index === 0 }
						>
							<PanelRow>
								{ renderFields( entry.fields, field.attributes, onChange, depth + 1 ) }
							</PanelRow>
						</PanelBody>
					) ) }
				</Panel>
			) }
		</BaseControl>
	);
};

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( originalProps ) => {
	return (
		<OriginalComplexField { ...originalProps }>
			{ ( {
				depth,
				handleChange,
				hasGroups,
				getAddLabel,
				handleAdd
			} ) => (
				<ComplexField
					depth={ depth }
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
