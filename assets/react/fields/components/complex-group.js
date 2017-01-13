/**
 * The external dependencies.
 */
import React from 'react';
import cx from 'classnames';
import { compose, withHandlers, withState } from 'recompose';

/**
 * The internal dependencies.
 */
import { makeField } from 'lib/factory';

/**
 * @param  {Object}   props
 * @param  {Object}   props.complex
 * @param  {Object}   props.group
 * @param  {Number}   props.index
 * @param  {Boolean}  props.collapsed
 * @param  {Function} props.toggle
 * @return {React.Element}
 *
 * @todo Fix the translation.
 * @todo Fix the custom label.
 */
export const ComplexGroup = ({ complex, group, index, collapsed, toggle }) => {
	return <div id={`carbon-${complex.name}-complex-container`} className={cx('carbon-row', 'carbon-group-row', { 'collapsed': collapsed })}>
		<input
			type="hidden"
			name={`${complex.name}[${index}][group]`}
			defaultValue={group.name} />

		<div className="carbon-drag-handle">
			<span className="group-number">todo</span>

			<span className="group-name"></span>
		</div>

		<div className={`carbon-group-actions carbon-group-actions-${complex.layout}`}>
			<a className="carbon-btn-duplicate dashicons-before dashicons-admin-page" href="#" title="Clone">
				Clone
			</a>

			<a className="carbon-btn-remove dashicons-before dashicons-trash" href="#" title="Remove">
				Remove
			</a>

			<a className="carbon-btn-collapse dashicons-before dashicons-arrow-up" href="#" title="Collapse/Expand" onClick={toggle}>
				Collapse/Expand
			</a>
		</div>

		<div className="fields-container">
			{group.fields.map(({ id, type }) => makeField(type, { id }))}
		</div>
	</div>;
};

/**
 * Expand or collapse the group.
 *
 * @param  {Object}   props
 * @param  {Boolean}  props.collapsed
 * @param  {Function} props.setCollapsed
 * @return {Function}
 */
const toggle = ({ collapsed, setCollapsed }) => {
	/**
	 * @inner
	 * @param  {Event} e
	 * @return {void}
	 */
	return (e) => {
		e.preventDefault();

		setCollapsed(!collapsed);
	};
}

export default compose(
	withState('collapsed', 'setCollapsed', false),
	withHandlers({
		toggle
	})
)(ComplexGroup);

