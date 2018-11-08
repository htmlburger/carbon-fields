/**
 * Renders the "Expand/Collapse All" button in complex fields.
 *
 * @param  {Object}   props
 * @param  {Object[]} props.groups
 * @param  {Function} props.onToggle
 * @return {Object}
 */
function ComplexToggler( { groups, onToggle } ) {
	const allGroupsAreCollapsed = groups.every( ( { collapsed } ) => collapsed );

	return (
		<button type="button" className="cf-complex__toggler" onClick={ () => onToggle( ! allGroupsAreCollapsed ) }>
			{ allGroupsAreCollapsed ? 'Expand All' : 'Collapse All' }
		</button>
	);
}

export default ComplexToggler;
