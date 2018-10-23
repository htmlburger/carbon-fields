/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import {
	BaseControl,
	DropdownMenu,
	Button,
	TabPanel
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
	const onTabSelect = ( tabName ) => {
		if ( tabName !== 'add' ) {
			return;
		}

		if ( ! hasGroups() ) {
			return onAdd( field.groups[ 0 ].group_id );
		}
	};

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

	const tabs = value.map( ( entry, index ) => ( {
		name: `${ entry.name }-${ index }`,
		title: entry.label ? entry.label : index + 1,
		fields: entry.fields
	} ) );

	return (
		<BaseControl label={ field.labels.plural_name }>
			{ value.length === 0 && button }

			{ value.length > 0 && (
				<TabPanel className="my-tab-panel"
					activeClass="active-tab"
					onSelect={ onTabSelect }
					tabs={ [ ...tabs, { icon: 'plus', name: 'add', title: getAddLabel() } ] }
				>
					{ ( tab ) => tab.fields && tab.fields.length > 0
						? renderFields( tab.fields, field.attributes, onChange, depth + 1 )
						: button
					}
				</TabPanel>
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
