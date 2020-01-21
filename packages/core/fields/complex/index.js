/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import {
	Component,
	Fragment,
	createRef
} from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	get,
	find,
	isEmpty,
	isString,
	template
} from 'lodash';

/**
 * The internal dependencies.
 */
import './style.scss';
import Sortable from '../../components/sortable';
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
		currentDraggedGroup: null,
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
	 * @return {string}
	 */
	get inserterButtonText() {
		const { field } = this.props;

		return sprintf( __( 'Add %s', 'carbon-fields-ui' ), field.labels.singular_name );
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
	 * Returns a list of labels of existing groups.
	 *
	 * @return {string[]}
	 */
	getGroupLabels() {
		const { field, groupValues } = this.props;

		return groupValues.map( ( [ name, values ], index ) => {
			const group = find( field.groups, [ 'name', name ] );

			if ( ! group ) {
				return 'N/A';
			}

			if ( ! isString( group.label_template ) ) {
				return group.label;
			}

			try {
				const label = template( group.label_template )( {
					$_index: index,
					...values
				} );

				return label || group.label;
			} catch ( e ) {
				// eslint-disable-next-line no-console
				console.error(
					sprintf(
						__( 'Couldn\'t create the label of group - %s', 'carbon-fields-ui' ),
						e.message
					)
				);

				return 'N/A';
			}
		} );
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
	 * Handles the start of groups sorting.
	 *
	 * @param  {Object} e
	 * @param  {Object} ui
	 * @return {void}
	 */
	handleGroupsSortStart = ( e, ui ) => {
		const { value, groupIdKey } = this.props;
		const index = ui.item.index();
		const id = get( value, `${ index }.${ groupIdKey }`, null );

		this.setState( {
			currentDraggedGroup: id
		} );
	}

	/**
	 * Handles sorting of groups.
	 *
	 * @param  {Object[]} groups
	 * @return {void}
	 */
	handleGroupsSortUpdate = ( groups ) => {
		const { id, onChange } = this.props;

		onChange( id, groups );
	}

	/**
	 * Handles the stop of groups sorting
	 *
	 * @return {void}
	 */
	handleGroupsSortStop = () => {
		this.setState( {
			currentDraggedGroup: null
		} );
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
		const { currentDraggedGroup, currentTab } = this.state;

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

		const availableGroups = this.getAvailableGroups( groupFilterKey );
		const groupLabels = this.getGroupLabels();

		// TODO: Move this to a memoized function.
		const tabs = value.map( ( group, index ) => {
			const id = group[ groupIdKey ];
			const label = groupLabels[ index ];

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
						onUpdate={ this.handleGroupsSortUpdate }
					>
						<ComplexTabs
							ref={ this.tabsList }
							items={ tabs }
							current={ currentTab }
							layout={ field.layout }
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
					<ComplexPlaceholder label={ __( 'There are no entries yet.', 'carbon-fields-ui' ) }>
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
							// axis: 'y',
							helper: 'clone',
							handle: '.cf-complex__group-head',
							placeholder: 'cf-complex__group-placeholder',
							forceHelperSize: true,
							forcePlaceholderSize: true
						} }
						forwardedRef={ this.groupsList }
						onStart={ this.handleGroupsSortStart }
						onUpdate={ this.handleGroupsSortUpdate }
						onStop={ this.handleGroupsSortStop }
					>
						<div className="cf-complex__groups" ref={ this.groupsList }>
							{ value.map( ( group, index ) => (
								// The `key` will be assigned via `onGroupSetup`.
								// eslint-disable-next-line react/jsx-key
								<ComplexGroup key={ `${ group[ groupFilterKey ] }-${ index }` } { ...onGroupSetup( group, {
									index,
									label: groupLabels[ index ],
									dragged: group[ groupIdKey ] === currentDraggedGroup,
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
							{ allGroupsAreCollapsed ? __( 'Expand All', 'carbon-fields-ui' ) : __( 'Collapse All', 'carbon-fields-ui' ) }
						</button>
					</div>
				) }
			</Fragment>
		);
	}
}

addFilter( 'carbon-fields.field-wrapper', 'carbon-fields/core', ( OriginalField ) => ( props ) => {
	const { field } = props;

	if ( field.type !== 'complex' ) {
		return <OriginalField { ...props } />;
	}

	return <OriginalField className={ `cf-complex--${ field.layout }` } { ...props } />;
} );

addFilter( 'carbon-fields.complex.validate', 'carbon-fields/core', ( field, value ) => {
	const {
		min,
		labels,
		required
	} = field;

	if ( required && isEmpty( value ) ) {
		return __( 'This field is required.', 'carbon-fields-ui' );
	}

	if ( min > 0 && value.length < min ) {
		const label = min === 1 ? labels.singular_name : labels.plural_name;

		return sprintf(
			__( 'Minimum number of rows not reached (%1$d %2$s)', 'carbon-fields-ui' ),
			Number( min ),
			label.toLowerCase()
		);
	}

	return null;
} );

export default ComplexField;
