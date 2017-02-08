/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { compose, branch, renderNothing, renderComponent, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

/**
 * Render the navigation of tabs when the layout of complex field is tabbed.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.groups
 * @param  {Function}      props.isTabActive
 * @param  {Function}      props.handleClick
 * @param  {React.Element} props.children
 * @return {React.Element}
 *
 * @todo Add support for custom labels with `dangerouslySetInnerHTML`.
 */
export const ComplexTabs = ({ groups, isTabActive, handleClick, children }) => {
	return <div className="group-tabs-nav-holder">
		<ul className="group-tabs-nav">
			{
				groups.map((group, index) => {
					return <li key={index} className={cx('group-tab-item', { 'active': isTabActive(group.id) })}>
						<a href="#" onClick={handleClick(group.id)}>
							<span className="group-handle"></span>

							{
								group.label
								? <span className="group-name">{group.label}</span>
								: null
							}

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
	children: PropTypes.element,
};

/**
 * Check whether the tab should have an `active` class.
 *
 * @param  {Object}   props
 * @param  {String}   props.current
 * @return {Function}
 */
const isTabActive = ({ current }) => groupId => groupId === current;

/**
 * Handle the click on the links in the list.
 *
 * @param  {Object}   props
 * @param  {Function} props.onClick
 * @return {Function}
 */
const handleClick = ({ onClick }) => groupId => preventDefault(() => onClick(groupId));

export default branch(
	({ show }) => show,

	renderComponent(compose(
		withHandlers({ isTabActive, handleClick })
	)(ComplexTabs)),

	renderNothing,
)();
