/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { compose, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { VALUE_PROPERTY } from 'fields/constants';
import { preventDefault } from 'lib/helpers';

import fieldFactory from 'fields/factory';
import withHeaderTemplate from 'fields/decorators/with-header-template';

/**
 * Render the holder around the complex's fields.
 *
 * @param  {Object}        props
 * @param  {Number}        props.index
 * @param  {String}        props.prefix
 * @param  {String}        props.layout
 * @param  {Object}        props.group
 * @param  {String}        props.label
 * @param  {Boolean}       props.active
 * @param  {Function}      props.handleToggleClick
 * @param  {Function}      props.handleCloneClick
 * @param  {Function}      props.handleRemoveClick
 * @return {React.Element}
 */
export const ComplexGroup = ({
	index,
	prefix,
	layout,
	group,
	label,
	active,
	cloneEnabled,
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
	const cloneButton = cloneEnabled ? (
		<a
			href="#"
			className="carbon-btn-duplicate dashicons-before dashicons-admin-page"
			title={carbonFieldsL10n.field.complexCloneButton}
			onClick={handleCloneClick}>
			{carbonFieldsL10n.field.complexCloneButton}
		</a>
	) : '';

	return <div id={group.id} className={cx(classes)}>
		<input
			type="hidden"
			name={`${prefix}[${index}][${VALUE_PROPERTY}]`}
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
			{cloneButton}

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
	index: PropTypes.number,
	prefix: PropTypes.string,
	layout: PropTypes.string,
	group: PropTypes.shape({
		name: PropTypes.string,
		collapsed: PropTypes.bool,
		fields: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string,
			type: PropTypes.string,
			name: PropTypes.string,
		})),
	}),
	label: PropTypes.string,
	active: PropTypes.bool,
	cloneEnabled: PropTypes.bool,
	onClone: PropTypes.func,
	onRemove: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Add logic for header templates.
	 */
	withHeaderTemplate,

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleToggleClick: ({ group, onExpand, onCollapse }) => preventDefault(() => group.collapsed ? onExpand(group.id) : onCollapse(group.id)),
		handleCloneClick: ({ group, onClone }) => preventDefault(() => onClone(group.id)),
		handleRemoveClick: ({ group, onRemove }) => preventDefault(() => onRemove(group.id)),
	})
);

export default enhance(ComplexGroup);
