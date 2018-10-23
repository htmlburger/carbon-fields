/**
 * The external dependencies.
 */
import { Button, Dropdown } from '@wordpress/components';

/**
 * Render the add button for the Complex field
 * @param  {Object}   props
 * @param  {string}   props.addLabel
 * @param  {boolean}  props.hasGroups
 * @param  {Array}    props.groups
 * @param  {Function} props.getLabel
 * @param  {Function} props.onClick
 * @return {Object}
 */
const AddButton = ( {
	addLabel,
	hasGroups,
	groups,
	getLabel,
	onClick
} ) => {
	const renderButton = ( groupName, key = null ) => (
		<Button isDefault onClick={ () => onClick( groupName ) } key={ key }>
			{ getLabel( groupName, true ) }
		</Button>
	);

	return (
		hasGroups
			? (
				<Dropdown
					className="my-container-class-name"
					contentClassName="my-popover-content-classname"
					position="bottom center"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button isDefault onClick={ onToggle } aria-expanded={ isOpen }>
							{ addLabel }
						</Button>
					) }
					renderContent={ () => (
						groups.map( ( group ) => renderButton( group.name, group.group_id ) )
					) }
				/>
			)
			: renderButton( groups[ 0 ].name )
	);
};

export default AddButton;
