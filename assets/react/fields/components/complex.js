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

import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { addComplexGroup } from 'fields/actions';

/**
 * Render a group(s) of fields.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Object}   props.popoverVisible
 * @param  {Function} props.handleActionsButtonClick
 * @param  {Function} props.handlePopoverClose
 * @return {React.Element}
 */
export const ComplexField = ({ field, popoverVisible, handleActionsButtonClick, handlePopoverClose }) => {
	return <Field field={field}>
		<div className={cx('carbon-subcontainer', 'carbon-grid', { 'multiple-groups': field.multiple_groups })}>
			<div className={cx('groups-wrapper', `layout-${field.layout}`)}>
				<div className="carbon-groups-holder">
					{field.value.map((group, index) => <ComplexGroup key={index} complex={field} group={group} index={index} />)}
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
 * The additional actions that will be passed to the component.
 *
 * @type {Object}
 */
const mapDispatchToProps = {
	addComplexGroup,
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
const handlePopoverClose = ({ setPopoverVisibility }) => {
	/**
	 * @inner
	 * @param  {Event} e
	 * @return {void}
	 */
	return (e) => {
		setPopoverVisibility(false);
	};
};

export default compose(
	withStore(undefined, mapDispatchToProps),
	withSetup(),
	withState('popoverVisible', 'setPopoverVisibility', false),
	withHandlers({ handleActionsButtonClick, handlePopoverClose })
)(ComplexField);

