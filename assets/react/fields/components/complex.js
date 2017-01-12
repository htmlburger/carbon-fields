/**
 * The external dependencies.
 */
import React from 'react';
import cx from 'classnames';
import { compose, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import ComplexGroup from 'fields/components/complex-group';
import ComplexActions from 'fields/components/complex-actions';

import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { addComplexGroup } from 'fields/actions';

/**
 * Renders a group(s) of fields.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.handleActionsButtonClick
 * @return {React.Element}
 */
export const ComplexField = ({ field, handleActionsButtonClick }) => {
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
				onButtonClick={handleActionsButtonClick} />
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
 * Add a new complex group.
 *
 * @param  {Object} props
 * @return {Function}
 */
const addNewGroup = (props) => {
	/**
	 * @inner
	 * @param  {String} group The name of the group.
	 * @return {void}
	 */
	return (group) => {
		console.log(group);
	};
};

/**
 * Handle the click on 'Add ..' button.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.addComplexGroup
 * @return {Function}
 */
const handleActionsButtonClick = ({ field, addComplexGroup }) => {
	/**
	 * @inner
	 * @param  {Event} e The DOM event.
	 * @return {void}
	 */
	return (e) => {
		e.preventDefault();

		if (field.multiple_groups) {
			console.log(field);
		} else {
			addComplexGroup(field.id, field.groups[0].name);
		}
	};
};

export default compose(
	withStore(undefined, mapDispatchToProps),
	withSetup(),
	withHandlers({ addNewGroup }),
	withHandlers({ handleActionsButtonClick })
)(ComplexField);

