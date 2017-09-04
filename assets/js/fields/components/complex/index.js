/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
	isEmpty,
	includes,
	filter,
	findIndex,
	fromPairs,
	map,
	pickBy,
	sortBy,
	values
} from 'lodash';
import {
	compose,
	withHandlers,
	withState,
	setStatic,
	withProps
} from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import SortableList from 'fields/components/sortable-list';
import ComplexGroup from 'fields/components/complex/group';
import ComplexActions from 'fields/components/complex/actions';
import ComplexPopover from 'fields/components/complex/popover';
import ComplexTabs from 'fields/components/complex/tabs';
import ComplexEmptyNotice from 'fields/components/complex/empty-notice';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { isFieldTabbed } from 'fields/selectors';
import {
	addComplexGroup,
	cloneComplexGroup,
	removeComplexGroup,
	expandComplexGroup,
	collapseComplexGroup,
	switchComplexTab,
	startComplexGroupDrag,
	stopComplexGroupDrag
} from 'fields/actions';
import {
	TYPE_COMPLEX,
	VALIDATION_COMPLEX,
	COMPLEX_LAYOUT_GRID,
	COMPLEX_LAYOUT_TABBED_VERTICAL,
	TYPE_MAP
} from 'fields/constants';

/**
 * Render a group(s) of fields.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Boolean}       props.tabbed
 * @param  {Boolean}       props.popoverVisible
 * @param  {Object}        props.sortableTabsOptions
 * @param  {Object}        props.sortableGroupsOptions
 * @param  {Function}      props.isGroupActive
 * @param  {Function}      props.handlePopoverClose
 * @param  {Function}      props.handleTabClick
 * @param  {Function}      props.handleAddGroupClick
 * @param  {Function}      props.handleCloneGroupClick
 * @param  {Function}      props.handleRemoveGroupClick
 * @param  {Function}      props.handleSort
 * @return {React.Element}
 */
export const ComplexField = ({
	name,
	field,
	enabledGroupTypes,
	tabbed,
	popoverVisible,
	groupToggles,
	sortableTabsOptions,
	sortableGroupsOptions,
	isGroupActive,
	expandGroup,
	collapseGroup,
	handlePopoverClose,
	handleTabClick,
	handleAddGroupClick,
	handleCloneGroupClick,
	handleRemoveGroupClick,
	handleGroupExpand,
	handleGroupCollapse,
	handleSort
}) => {
	const availableGroups = filter(field.group_types, groupType => includes(enabledGroupTypes, groupType.name));
	const complexTabActions = isEmpty(availableGroups) ? null : (
		<ComplexActions
			buttonText="+"
			onButtonClick={handleAddGroupClick}>
				<ComplexPopover
					groups={availableGroups}
					visible={popoverVisible}
					onItemClick={handleAddGroupClick}
					onClose={handlePopoverClose}
					outsideClickIgnoreClass="carbon-button" />
		</ComplexActions>
	);
	const complexButtonActions = isEmpty(availableGroups) ? null : (
		<ComplexActions
			buttonText={carbonFieldsL10n.field.complexAddButton.replace('%s', field.labels.singular_name)}
			onButtonClick={handleAddGroupClick}>
				<ComplexPopover
					groups={availableGroups}
					visible={popoverVisible}
					onItemClick={handleAddGroupClick}
					onClose={handlePopoverClose}
					outsideClickIgnoreClass="carbon-button" />
		</ComplexActions>
	);

	return <Field field={field}>
		<div className={cx('carbon-subcontainer', 'carbon-grid', { 'multiple-groups': field.multiple_groups }, { 'carbon-complex-tabbed': tabbed })}>
			<ComplexEmptyNotice
				label={field.labels.plural_name}
				visible={!field.value.length}
				onClick={handleAddGroupClick} />

			<div className={cx('groups-wrapper', `layout-${field.layout}`)}>
				<SortableList options={sortableTabsOptions} onSort={handleSort}>
					<ComplexTabs
						show={tabbed}
						layout={field.layout}
						groups={field.value}
						current={field.ui.current_tab}
						onClick={handleTabClick}
						onSort={handleSort}>
							{complexTabActions}
					</ComplexTabs>
				</SortableList>

				<SortableList options={sortableGroupsOptions} onSort={handleSort}>
					<div className="carbon-groups-holder">
						{
							field.value.map((group, index) => {
								return <ComplexGroup
									key={index}
									index={index}
									prefix={name}
									layout={field.layout}
									group={group}
									active={isGroupActive(group.id)}
									cloneEnabled={field.duplicate_groups_allowed}
									onClone={handleCloneGroupClick}
									onRemove={handleRemoveGroupClick}
									onExpand={handleGroupExpand}
									onCollapse={handleGroupCollapse} />
							})
						}
					</div>
				</SortableList>
			</div>

			{complexButtonActions}
		</div>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			label: PropTypes.string,
			fields: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.string,
				name: PropTypes.string,
				type: PropTypes.string,
			})),
		})),
		duplicate_groups_allowed: PropTypes.bool,
		enabledGroupTypes: PropTypes.arrayOf(PropTypes.string),
		group_types: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
			label: PropTypes.string,
		})),
		layout: PropTypes.string,
		labels: PropTypes.shape({
			plural_name: PropTypes.string,
			singular_name: PropTypes.string,
		}),
		ui: PropTypes.shape({
			current_tab: PropTypes.string
		}),
		multiple_groups: PropTypes.bool,
		min: PropTypes.number,
		max: PropTypes.number,
	}),
	tabbed: PropTypes.bool,
	popoverVisible: PropTypes.bool,
	isGroupActive: PropTypes.func,
	handlePopoverClose: PropTypes.func,
	handleTabClick: PropTypes.func,
	handleAddGroupClick: PropTypes.func,
	handleCloneGroupClick: PropTypes.func,
	handleRemoveGroupClick: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Connect to the Redux store.
	 */
	withStore(
		(state, props) => ({
			tabbed: isFieldTabbed(state, props.id),
		}),

		{
			addComplexGroup,
			cloneComplexGroup,
			removeComplexGroup,
			expandComplexGroup,
			collapseComplexGroup,
			switchComplexTab,
			startComplexGroupDrag,
			stopComplexGroupDrag
		}
	),

	/**
	 * Attach the setup hooks.
	 */
	withSetup({
		componentDidMount() {
			const {
				field,
				tabbed,
				setupField,
				setupValidation,
				setUI
			} = this.props;

			let { ui } = this.props;

			// Show the first tab of the complex.
			if (tabbed && field.value.length) {
				ui = {
					...ui,
					current_tab: field.value[0].id
				};
			}

			setupField(field.id, field.type, ui);

			setupValidation(field.id, VALIDATION_COMPLEX);
		}
	}),

	/**
	 * Pass some props to the component.
	 */
	withProps(({
		field,
		collapseComplexGroup,
		startComplexGroupDrag,
		stopComplexGroupDrag
	}) => {
		const sortableTabsOptions = {
			items: '.group-tab-item',
			placeholder: 'group-tab-item ui-placeholder-highlight',
			forcePlaceholderSize: true,
		};

		if (field.layout === COMPLEX_LAYOUT_TABBED_VERTICAL) {
			sortableTabsOptions.axis = 'y';
		}

		const sortableGroupsOptions = {
			items : '> .carbon-group-row',
			handle: '.carbon-drag-handle',
			placeholder: 'carbon-group-row ui-placeholder-highlight',
		};

		if (field.layout === COMPLEX_LAYOUT_GRID) {
			sortableGroupsOptions.start = (e, ui) => {
				const { id: fieldId } = field;
				const { id: groupId } = ui.item[0];

				collapseComplexGroup(fieldId, groupId);
				startComplexGroupDrag(fieldId, groupId);
			};

			sortableGroupsOptions.stop = (e, ui) => {
				stopComplexGroupDrag(field.id, ui.item[0].id);
			};
		}

		let enabledGroupTypes = map(field.group_types, 'name');
		if (!field.duplicate_groups_allowed) {
			enabledGroupTypes = filter(enabledGroupTypes, groupType => findIndex(field.value, {name: groupType}) === -1);
		}

		return {
			sortableTabsOptions,
			sortableGroupsOptions,
			enabledGroupTypes
		};
	}),

	/**
	 * Control the visibility of the popover.
	 */
	withState('popoverVisible', 'setPopoverVisibility', false),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		isGroupActive: ({ field, tabbed }) => groupId => tabbed && field.ui.current_tab === groupId,
		handlePopoverClose: ({ setPopoverVisibility }) => () => setPopoverVisibility(false),
		handleTabClick: ({ field, switchComplexTab }) => groupId => switchComplexTab(field.id, groupId),
		handleCloneGroupClick: ({ field, cloneComplexGroup }) => groupId => cloneComplexGroup(field.id, groupId),
		handleRemoveGroupClick: ({ field, removeComplexGroup }) => groupId => removeComplexGroup(field.id, groupId),
		handleGroupExpand: ({ field, expandComplexGroup }) => groupId => expandComplexGroup(field.id, groupId),
		handleGroupCollapse: ({ field, collapseComplexGroup }) => groupId => collapseComplexGroup(field.id, groupId),

		handleAddGroupClick: ({ field, popoverVisible, setPopoverVisibility, addComplexGroup }) => groupName => {
			if (field.multiple_groups) {
				setPopoverVisibility(!popoverVisible);
			} else {
				groupName = field.group_types[0].name;
			}

			if (groupName) {
				addComplexGroup(field.id, groupName);
			}
		},

		handleSort: ({ field, setFieldValue, expandComplexGroup }) => (groups, event, ui) => {
			// Cache the id attribute of the group, because the next line
			// will re-order DOM and we will lose the correct group's id.
			const groupId = ui.item[0].id;

			setFieldValue(field.id, sortBy(field.value, group => groups.indexOf(group.id)));
			expandComplexGroup(field.id, groupId);
		},
	}),
);

export default setStatic('type', [
	TYPE_COMPLEX,
])(enhance(ComplexField));
