/**
 * The external dependencies.
 */
import React from 'react';
import cx from 'classnames';
import { compose, withHandlers, withState } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import ComplexGroup from 'fields/components/complex-group';
import ComplexActions from 'fields/components/complex-actions';
import ComplexPopover from 'fields/components/complex-popover';
import ComplexTabs from 'fields/components/complex-tabs';
import ComplexEmptyNotice from 'fields/components/complex-empty-notice';

import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { isFieldTabbed } from 'fields/selectors';
import { addComplexGroup, cloneComplexGroup, removeComplexGroup } from 'fields/actions';

/**
 * Render a group(s) of fields.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Boolean}  props.tabbed
 * @param  {Boolean}  props.popoverVisible
 * @param  {Function} props.isGroupActive
 * @param  {Function} props.handlePopoverClose
 * @param  {Function} props.handleTabClick
 * @param  {Function} props.handleAddGroupClick
 * @param  {Function} props.handleCloneGroupClick
 * @param  {Function} props.handleRemoveGroupClick
 * @return {React.Element}
 */
export const ComplexField = ({
	name,
	field,
	tabbed,
	popoverVisible,
	isGroupActive,
	handlePopoverClose,
	handleTabClick,
	handleAddGroupClick,
	handleCloneGroupClick,
	handleRemoveGroupClick
}) => {
	return <Field field={field}>
		<div className={cx('carbon-subcontainer', 'carbon-grid', { 'multiple-groups': field.multiple_groups }, { 'carbon-Complex-tabbed': tabbed })}>
			<ComplexEmptyNotice
				label={field.labels.plural_name}
				visible={!field.value.length}
				onClick={handleAddGroupClick} />

			<div className={cx('groups-wrapper', `layout-${field.layout}`)}>
				<ComplexTabs groups={field.value} current={field.ui.current_tab} show={tabbed} onClick={handleTabClick}>
					<ComplexActions
						buttonText="+"
						onButtonClick={handleAddGroupClick}>
							<ComplexPopover
								groups={field.groups}
								visible={popoverVisible}
								onItemClick={handleAddGroupClick}
								onClose={handlePopoverClose}
								outsideClickIgnoreClass="carbon-button" />
					</ComplexActions>
				</ComplexTabs>

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
								onClone={handleCloneGroupClick}
								onRemove={handleRemoveGroupClick} />
						})
					}
				</div>
				<div className="clear"></div>
			</div>

			<ComplexActions
				buttonText={crbl10n.complex_add_button.replace('%s', field.labels.singular_name)}
				onButtonClick={handleAddGroupClick}>
					<ComplexPopover
						groups={field.groups}
						visible={popoverVisible}
						onItemClick={handleAddGroupClick}
						onClose={handlePopoverClose}
						outsideClickIgnoreClass="carbon-button" />
			</ComplexActions>
		</div>
	</Field>;
};

/**
 * Pass additional props to the component.
 *
 * @param  {Object} state
 * @param  {Object} props
 * @return {Object}
 */
const mapStateToProps = (state, props) => ({
	tabbed: isFieldTabbed(state, props.id),
});

/**
 * The additional actions that will be passed to the component.
 *
 * @type {Object}
 */
const mapDispatchToProps = {
	addComplexGroup,
	cloneComplexGroup,
	removeComplexGroup,
};

/**
 * The lifecycle hooks that will be attached to the field.
 *
 * @type {Object}
 */
const hooks = {
	componentDidMount() {
		const {
			field,
			tabbed,
			setupField,
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

		setupField(field.id, field.type);
		setUI(field.id, ui);
	}
};

/**
 * Handle the click on 'Add ..' button.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Boolean}  props.popoverVisible
 * @param  {Function} props.setPopoverVisibility
 * @param  {Function} props.addComplexGroup
 * @return {Function}
 */
const handleAddGroupClick = ({ field, popoverVisible, setPopoverVisibility, addComplexGroup }) => groupName => {
	if (field.multiple_groups) {
		setPopoverVisibility(!popoverVisible);
	} else {
		groupName = field.groups[0].name;
	}

	if (groupName) {
		addComplexGroup(field.id, groupName);
	}
};

/**
 * Update the visibility of the popover.
 *
 * @param  {Object}   props
 * @param  {Function} props.setPopoverVisibility
 * @return {Function}
 */
const handlePopoverClose = ({ setPopoverVisibility }) => () => setPopoverVisibility(false);

/**
 * Change the current tab.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.setUI
 * @return {Function}
 */
const handleTabClick = ({ field, setUI }) => groupId => setUI(field.id, { current_tab: groupId });

/**
 * Clone the complex group.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.cloneComplexGroup
 * @return {Function}
 */
const handleCloneGroupClick = ({ field, cloneComplexGroup }) => groupId => cloneComplexGroup(field.id, groupId);

/**
 * Remove the complex group.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.removeComplexGroup
 * @return {Function}
 */
const handleRemoveGroupClick = ({ field, removeComplexGroup }) => groupId => removeComplexGroup(field.id, groupId);

/**
 * Check whether the group is the currently visible tab.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Boolean}  props.tabbed
 * @return {Function}
 */
const isGroupActive = ({ field, tabbed }) => groupId => tabbed && field.ui.current_tab === groupId;

export default compose(
	withStore(mapStateToProps, mapDispatchToProps),
	withSetup(hooks),
	withState('popoverVisible', 'setPopoverVisibility', false),
	withHandlers({
		isGroupActive,
		handlePopoverClose,
		handleTabClick,
		handleAddGroupClick,
		handleCloneGroupClick,
		handleRemoveGroupClick,
	})
)(ComplexField);

