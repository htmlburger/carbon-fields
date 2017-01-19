/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { compose, withHandlers, withState } from 'recompose';

/**
 * The internal dependencies.
 */
import { makeField } from 'lib/factory';
import { preventDefault } from 'lib/helpers';

/**
 * Render the holder around the complex's fields.
 *
 * @param  {Object}   props
 * @param  {Number}   props.index
 * @param  {String}   props.prefix
 * @param  {String}   props.layout
 * @param  {Object}   props.group
 * @param  {Boolean}  props.isActive
 * @param  {Boolean}  props.isCollapsed
 * @param  {Function} props.handleToggleClick
 * @param  {Function} props.handleCloneClick
 * @param  {Function} props.handleRemoveClick
 * @return {React.Element}
 *
 * TODO: Fix the translation of the hints.
 * TODO: Add support for custom labels.
 */
export const ComplexGroup = ({ index, prefix, layout, group, isActive, isCollapsed, handleToggleClick, handleCloneClick, handleRemoveClick }) => {
	return <div className={cx('carbon-row', 'carbon-group-row', { 'collapsed': isCollapsed }, { 'active': isActive })}>
		<input
			type="hidden"
			name={`${prefix}[${index}][group]`}
			defaultValue={group.name} />

		<div className="carbon-drag-handle">
			<span className="group-number">{index + 1}</span>

			<span className="group-name"></span>
		</div>

		<div className={`carbon-group-actions carbon-group-actions-${layout}`}>
			<a className="carbon-btn-duplicate dashicons-before dashicons-admin-page" href="#" title="Clone" onClick={handleCloneClick}>
				Clone
			</a>

			<a className="carbon-btn-remove dashicons-before dashicons-trash" href="#" title="Remove" onClick={handleRemoveClick}>
				Remove
			</a>

			<a className="carbon-btn-collapse dashicons-before dashicons-arrow-up" href="#" title="Collapse/Expand" onClick={handleToggleClick}>
				Collapse/Expand
			</a>
		</div>

		<div className="fields-container">
			{
				group.fields.map(({ id, type, name }) => {
					const name = `${prefix}[${index}][${name}]`;

					return makeField(type, {
						id,
						name,
					});
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
		fields: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})),
	}).isRequired,
	isActive: PropTypes.bool.isRequired,
	onClone: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

/**
 * Handle the click on the 'Expand/Collapse' button.
 *
 * @param  {Object}   props
 * @param  {Boolean}  props.isCollapsed
 * @param  {Function} props.setCollapsed
 * @return {Function}
 */
const handleToggleClick = ({ isCollapsed, setCollapsed }) => preventDefault(() => setCollapsed(!isCollapsed));

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
	withState('isCollapsed', 'setCollapsed', false),
	withHandlers({
		handleToggleClick,
		handleCloneClick,
		handleRemoveClick,
	})
)(ComplexGroup);

