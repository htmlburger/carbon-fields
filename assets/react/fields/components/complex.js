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
 * @param  {Object}   props.popoverVisible
 * @param  {Function} props.handleActionsButtonClick
 * @param  {Function} props.handlePopoverClose
 * @return {React.Element}
 */
export const ComplexField = ({ name, field, isTabbed, popoverVisible, isGroupActive, handleActionsButtonClick, handlePopoverClose, handleTabClick, handleCloneGroupClick, handleRemoveGroupClick }) => {
	return <Field field={field}>
		<div className={cx('carbon-subcontainer', 'carbon-grid', { 'multiple-groups': field.multiple_groups }, { 'carbon-Complex-tabbed': isTabbed })}>
			<ComplexEmptyNotice
				label={field.labels.plural_name}
				visible={!field.value.length}
				onClick={handleActionsButtonClick} />

			<div className={cx('groups-wrapper', `layout-${field.layout}`)}>
				<ComplexTabs groups={field.value} current={field.ui.current_tab} show={isTabbed} onClick={handleTabClick}>
					<ComplexActions
						buttonText="+"
						onButtonClick={handleActionsButtonClick}>
							<ComplexPopover
								groups={field.groups}
								visible={popoverVisible}
								onItemClick={handleActionsButtonClick}
								onClose={handlePopoverClose}
								outsideClickIgnoreClass={'carbon-button'} />
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
								isActive={isGroupActive(group.id)}
								onClone={handleCloneGroupClick}
								onRemove={handleRemoveGroupClick} />
						})
					}
				</div>
				<div className="clear"></div>
			</div>

			<ComplexActions
				buttonText={crbl10n.complex_add_button.replace('%s', field.labels.singular_name)}
				onButtonClick={handleActionsButtonClick}>
					<ComplexPopover
						groups={field.groups}
						visible={popoverVisible}
						onItemClick={handleActionsButtonClick}
						onClose={handlePopoverClose}
						outsideClickIgnoreClass={'carbon-button'} />
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
const mapStateToProps = (state, props) => {
	return {
		isTabbed: isFieldTabbed(state, props.id),
	};
};

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
			isTabbed,
			setupField,
			setUI
		} = this.props;

		let { ui } = this.props;

		// Show the first tab of the complex.
		if (isTabbed && field.value.length) {
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
 * @param  {Function} props.addComplexGroup
 * @param  {Function} props.setPopoverVisibility
 * @return {Function}
 */
const handleActionsButtonClick = ({ field, popoverVisible, addComplexGroup, setPopoverVisibility }) => {
	/**
	 * @inner
	 * @param  {String} [group]
	 * @return {void}
	 */
	return (group) => {
		if (field.multiple_groups) {
			setPopoverVisibility(!popoverVisible);
		} else {
			group = field.groups[0].name;
		}

		if (group) {
			addComplexGroup(field.id, group);
		}
	};
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
const handleTabClick = ({ field, setUI }) => {
	/**
	 * @inner
	 * @param  {String} group
	 * @return {void}
	 */
	return (group) => {
		setUI(field.id, {
			current_tab: group
		});
	};
};

/**
 * Clone the complex group.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.cloneComplexGroup
 * @return {Function}
 */
const handleCloneGroupClick = ({ field, cloneComplexGroup }) => {
	/**
	 * @inner
	 * @param  {String} groupId
	 * @return {void}
	 */
	return (groupId) => {
		cloneComplexGroup(field.id, groupId);
	};
};

/**
 * Remove the complex group.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @return {Function}
 */
const handleRemoveGroupClick = ({ field, removeComplexGroup }) => {
	/**
	 * @inner
	 * @param  {String} group
	 * @return {void}
	 */
	return (group) => {
		removeComplexGroup(field.id, group);
	};
};

/**
 * Check whether the group is the currently visible tab.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Boolean}  props.isTabbed
 * @return {Function}
 */
const isGroupActive = ({ field, isTabbed }) => {
	/**
	 * @inner
	 * @param  {String}  groupId
	 * @return {Boolean}
	 */
	return groupId => isTabbed && field.ui.current_tab === groupId;
};

export default compose(
	withStore(mapStateToProps, mapDispatchToProps),
	withSetup(hooks),
	withState('popoverVisible', 'setPopoverVisibility', false),
	withHandlers({
		isGroupActive,
		handleActionsButtonClick,
		handlePopoverClose,
		handleTabClick,
		handleCloneGroupClick,
		handleRemoveGroupClick,
	})
)(ComplexField);

