/**
 * The external dependencies.
 */
import React from 'react';
import cx from 'classnames';
import { PropTypes } from 'react';
import { compose, branch, renderNothing, renderComponent, withHandlers } from 'recompose';

/**
 * Render the navigation of tabs when the layout of complex field is tabbed.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.groups
 * @param  {Function}      props.isActive
 * @param  {Function}      props.handleClick
 * @param  {React.Element} props.children
 * @return {React.Element}
 *
 * @todo Add support for custom labels with `dangerouslySetInnerHTML`.
 */
export const ComplexTabs = ({ groups, isActive, handleClick, children }) => {
	return <div className="group-tabs-nav-holder">
		<ul className="group-tabs-nav">
			{
				groups.map((group, index) => {
					return <li key={index} className={cx('group-tab-item', { 'active': isActive(group) })}>
						<a href="#" onClick={handleClick(group.id)}>
							<span className="group-handle"></span>

							<span className="group-name">{group.label}</span>

							<span className="group-number">{index + 1}</span>
							<span className="dashicons dashicons-warning carbon-complex-group-error-badge"></span>
						</a>
					</li>
				})
			}
		</ul>

		{children}
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexTabs.propTypes = {
	groups: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
	})).isRequired,
	show: PropTypes.bool.isRequired,
	current: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

/**
 * Check whether the tab should have an `active` class.
 *
 * @param  {Object}   props
 * @param  {String}   props.current
 * @return {Function}
 */
const isActive = ({ current }) => {
	/**
	 * @inner
	 * @param  {Object} group
	 * @return {Boolean}
	 */
	return (group) => {
		return group.id === current;
	};
};

/**
 * Handle the click on the links in the list.
 *
 * @param  {Object}   props
 * @param  {Function} props.onClick
 * @return {Function}
 */
const handleClick = ({ onClick }) => {
	/**
	 * @inner
	 * @param  {String} group
	 * @param  {Event}  e
	 * @return {void}
	 */
	return (group) => (e) => {
		e.preventDefault();

		onClick(group);
	};
};

export default branch(
	({ show }) => show,

	renderComponent(compose(
		withHandlers({ isActive, handleClick })
	)(ComplexTabs)),

	renderNothing,
)();
