/**
 * External dependencies.
 */
import cx from 'classnames';
import { addFilter } from '@wordpress/hooks';
import {
	Component,
	Fragment,
	createRef
} from '@wordpress/element';
import {
	get,
	find,
	isEmpty
} from 'lodash';

/**
 * The internal dependencies.
 */
import './style.scss';
import Sortable from '../../components/sortable';
import { getComplexLabel } from '../../utils/get-complex-label.js';
import ComplexTabs from './tabs';
import ComplexInserter from './inserter';
import ComplexGroup from './group';
import ComplexPlaceholder from './placeholder';

class ComplexField extends Component {
	/**
	 * Keeps reference to the DOM that contains the groups.
	 *
	 * @type {Object}
	 */
	groupsList = createRef();

	/**
	 * Keeps reference to the DOM that contains the tabs.
	 *
	 * @type {Object}
	 */
	tabsList = createRef();

	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		currentTab: get( this.props.value, `0.${ this.props.groupIdKey }`, null )
	};

	/**
	 * Returns true if the field is using tabs for the layout.
	 *
	 * @return {boolean}
	 */
	get isTabbed() {
		return this.props.field.layout.indexOf( 'tabbed' ) > -1;
	}

	/**
	 * Returns true if the maximum number of entries is reached.
	 *
	 * @return {boolean}
	 */
	get isMaximumReached() {
		const { field, value } = this.props;

		return field.max > 0 && value.length >= field.max;
	}

	/**
	 * Returns the text used in "Add Entry" button.
	 *
	 * TODO: Switch to @wordpress/i18n
	 * @return {string}
	 */
	get inserterButtonText() {
		const { field } = this.props;

		return window.carbonFieldsL10n.field.complexAddButton.replace( '%s', field.labels.singular_name );
	}

	/**
	 * Finds a group.
	 *
	 * @param  {string} groupId
	 * @return {?Object}
	 */
	findGroup( groupId ) {
		const { value, groupIdKey } = this.props;

		return find( value, [ groupIdKey, groupId ] );
	}

	/**
	 * Returns a list of groups that can be added if the field
	 * doesn't allow duplicating of groups.
	 *
	 * @param  {string} key
	 * @return {Object[]}
	 */
	getAvailableGroups( key ) {
		const { field, value } = this.props;

		if ( field.duplicate_groups_allowed ) {
			return field.groups;
		}

		const existingGroupNames = value.map( ( group ) => group[ key ] );

		return field.groups.filter( ( { name } ) => existingGroupNames.indexOf( name ) === -1 );
	}

	/**
	 * Handles adding of group.
	 *
	 * @param  {Object} selection
	 * @return {void}
	 */
	handleAddGroup = ( selection ) => {
		const { groupIdKey, onAddGroup } = this.props;

		onAddGroup( selection, ( group ) => {
			if ( this.isTabbed ) {
				this.handleTabsChange( group[ groupIdKey ] );
			}
		} );
	}

	/**
	 * Handles cloning of group.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleCloneGroup = ( groupId ) => {
		const { groupIdKey, onCloneGroup } = this.props;

		const group = this.findGroup( groupId );

		onCloneGroup( group, ( clonedGroup ) => {
			if ( this.isTabbed ) {
				this.handleTabsChange( clonedGroup[ groupIdKey ] );
			}
		} );
	}

	/**
	 * Handles removing of group.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleRemoveGroup = ( groupId ) => {
		const {
			value,
			groupIdKey,
			onRemoveGroup
		} = this.props;

		const group = this.findGroup( groupId );

		if ( this.isTabbed ) {
			const currentIndex = value.indexOf( group );
			const nextIndex = currentIndex > 0 ? currentIndex - 1 : 1;

			this.setState( {
				currentTab: get( value, `${ nextIndex }.${ groupIdKey }`, null )
			} );
		}

		onRemoveGroup( group );
	}

	/**
	 * Handles click on the "Expand/Collapse All" button.
	 *
	 * @return {void}
	 */
	handleToggleAllClick = () => {
		const { allGroupsAreCollapsed, onToggleAllGroups } = this.props;

		onToggleAllGroups( ! allGroupsAreCollapsed );
	}

	/**
	 * Handles sorting of groups.
	 *
	 * @param  {Object[]} groups
	 * @return {void}
	 */
	handleSortGroups = ( groups ) => {
		const { id, onChange } = this.props;

		onChange( id, groups );
	}

	/**
	 * Handles changing of tabs.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleTabsChange = ( groupId ) => {
		this.setState( {
			currentTab: groupId
		} );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { currentTab } = this.state;

		const {
			value,
			field,
			groupIdKey,
			groupFilterKey,
			allGroupsAreCollapsed,
			onGroupSetup,
			onGroupFieldSetup,
			onToggleGroup
		} = this.props;

		// TODO: Add this via hook
		// eslint-disable-next-line
		const classes = cx(
			`cf-complex--${ field.layout }`,
			{
				'cf-complex--multiple-groups': field.groups.length > 1
			}
		);

		const availableGroups = this.getAvailableGroups( groupFilterKey );

		// TODO: Move this to a memoized function.
		const tabs = value.map( ( group, index ) => {
			const id = group[ groupIdKey ];
			const label = getComplexLabel( field.groups, group, index );

			return {
				id,
				label
			};
		} );

		return (
			<Fragment>
				{ this.isTabbed && !! value.length && (
					<Sortable
						items={ value }
						forwardedRef={ this.tabsList }
						options={ {
							axis: field.layout === 'tabbed-vertical' ? 'y' : 'x',
							forcePlaceholderSize: true
						} }
						onUpdate={ this.handleSortGroups }
					>
						<ComplexTabs
							ref={ this.tabsList }
							items={ tabs }
							current={ currentTab }
							onChange={ this.handleTabsChange }
						>
							{ !! availableGroups.length && ! this.isMaximumReached && (
								<ComplexInserter
									buttonText="+"
									groups={ availableGroups }
									onSelect={ this.handleAddGroup }
								/>
							) }
						</ComplexTabs>
					</Sortable>
				) }

				{ ! value.length && (
					<ComplexPlaceholder label="There are no entries yet.">
						<ComplexInserter
							buttonText={ this.inserterButtonText }
							groups={ availableGroups }
							onSelect={ this.handleAddGroup }
						/>
					</ComplexPlaceholder>
				) }

				{ !! value.length && (
					<Sortable
						items={ value }
						options={ {
							handle: '.cf-complex__group-head'
						} }
						forwardedRef={ this.groupsList }
						onUpdate={ this.handleSortGroups }
					>
						<div className="cf-complex__groups" ref={ this.groupsList }>
							{ value.map( ( group, index ) => (
								// The `key` will be assigned via `onGroupSetup`.
								// eslint-disable-next-line react/jsx-key
								<ComplexGroup { ...onGroupSetup( group, {
									index,
									label: getComplexLabel( field.groups, group, index ),
									tabbed: this.isTabbed,
									hidden: this.isTabbed && group[ groupIdKey ] !== currentTab,
									allowClone: field.duplicate_groups_allowed && ! this.isMaximumReached,
									onFieldSetup: onGroupFieldSetup,
									onClone: this.handleCloneGroup,
									onRemove: this.handleRemoveGroup,
									onToggle: onToggleGroup
								} ) } />
							) ) }
						</div>
					</Sortable>
				) }

				{ ! this.isTabbed && !! value.length && (
					<div className="cf-complex__actions">
						{ !! availableGroups.length && ! this.isMaximumReached && (
							<ComplexInserter
								buttonText={ this.inserterButtonText }
								groups={ availableGroups }
								onSelect={ this.handleAddGroup }
							/>
						) }

						<button type="button" className="button cf-complex__toggler" onClick={ this.handleToggleAllClick }>
							{ allGroupsAreCollapsed ? 'Expand All' : 'Collapse All' }
						</button>
					</div>
				) }
			</Fragment>
		);
	}
}

addFilter( 'carbon-fields.complex.validate', 'carbon-fields/core', ( field, value ) => {
	const {
		min,
		labels,
		required
	} = field;

	if ( required && isEmpty( value ) ) {
		return carbonFieldsL10n.field.messageRequiredField;
	}

	if ( min > 0 && value.length < min ) {
		const label = min === 1 ? labels.singular_name : labels.plural_name;

		return carbonFieldsL10n.field.complexMinNumRowsNotReached
			.replace( '%1$d', min )
			.replace( '%2$s', label.toLowerCase() );
	}

	return null;
} );

export default ComplexField;
