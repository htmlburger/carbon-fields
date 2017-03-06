/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { compose, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

import fieldFactory from 'fields/factory';
import withHeaderTemplate from 'fields/decorators/with-header-template';

/**
 * Render the holder around the complex's fields.
 *
 * @param  {Object}   props
 * @param  {Number}   props.index
 * @param  {String}   props.prefix
 * @param  {String}   props.layout
 * @param  {Object}   props.group
 * @param  {String}   props.label
 * @param  {Boolean}  props.active
 * @param  {Function} props.handleToggleClick
 * @param  {Function} props.handleCloneClick
 * @param  {Function} props.handleRemoveClick
 * @return {React.Element}
 */
export const ComplexGroup = ({
	index,
	prefix,
	layout,
	group,
	label,
	active,
	handleToggleClick,
	handleCloneClick,
	handleRemoveClick
}) => {
	const classes = [
		'carbon-row',
		'carbon-group-row',
		{ 'collapsed': group.collapsed },
		{ 'active': active },
	];

	return <div id={group.id} className={cx(classes)}>
		<input
			type="hidden"
			name={`${prefix}[${index}][_type]`}
			defaultValue={group.name} />

		<div className="carbon-drag-handle">
			<span className="group-number">
				{index + 1}
			</span>

			<span
				className="group-name"
				dangerouslySetInnerHTML={{ __html: label }} />
		</div>

		<div className={`carbon-group-actions carbon-group-actions-${layout}`}>
			<a
				href="#"
				className="carbon-btn-duplicate dashicons-before dashicons-admin-page"
				title={carbonFieldsL10n.field.complexCloneButton}
				onClick={handleCloneClick}>
				{carbonFieldsL10n.field.complexCloneButton}
			</a>

			<a
				href="#"
				className="carbon-btn-remove dashicons-before dashicons-trash"
				title={carbonFieldsL10n.field.complexRemoveButton}
				onClick={handleRemoveClick}>
				{carbonFieldsL10n.field.complexRemoveButton}
			</a>

			<a
				href="#"
				className="carbon-btn-collapse dashicons-before dashicons-arrow-up"
				title={carbonFieldsL10n.field.complexCollapseExpandButton}
				onClick={handleToggleClick}>
				{carbonFieldsL10n.field.complexCollapseExpandButton}
			</a>
		</div>

		<div className="fields-container">
			{
				group.fields.map(({ id, type, name }) => {
					name = `${prefix}[${index}][${name}]`;

					return fieldFactory(type, { id, name });
				})
			}
		</div>
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexGroup.propTypes = {
	index: PropTypes.number.isRequired,
	prefix: PropTypes.string.isRequired,
	layout: PropTypes.string.isRequired,
	group: PropTypes.shape({
		name: PropTypes.string.isRequired,
		collapsed: PropTypes.bool,
		fields: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})),
	}).isRequired,
	label: PropTypes.string,
	active: PropTypes.bool.isRequired,
	onClone: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

/**
 * Handle the click on the 'Expand/Collapse' button.
 *
 * @param  {Object}   props
 * @param  {Object}   props.group
 * @param  {Function} props.onExpand
 * @param  {Function} props.onCollapse
 * @return {Function}
 */
const handleToggleClick = ({ group, onExpand, onCollapse }) => preventDefault(() => group.collapsed ? onExpand(group.id) : onCollapse(group.id));

/**
 * Handle the click on the 'Clone' button.
 *
 * @param  {Object}   props
 * @param  {Object}   props.group
 * @param  {Function} props.onClone
 * @return {Function}
 */
const handleCloneClick = ({ group, onClone }) => preventDefault(() => onClone(group.id));

/**
 * Handle the click on the 'Remove' button.
 *
 * @param  {Object}   props
 * @param  {Object}   props.group
 * @param  {Function} props.onRemove
 * @return {Function}
 */
const handleRemoveClick = ({ group, onRemove }) => preventDefault(() => onRemove(group.id));

export default compose(
	withHeaderTemplate,
	withHandlers({
		handleToggleClick,
		handleCloneClick,
		handleRemoveClick,
	})
)(ComplexGroup);

