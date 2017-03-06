/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { branch, renderNothing, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import ComplexTab from 'fields/components/complex/tab';

/**
 * Render the navigation of tabs when the layout of complex field is tabbed.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.groups
 * @param  {Function}      props.isTabActive
 * @param  {Function}      props.handleClick
 * @param  {React.Element} props.children
 * @return {React.Element}
 */
export const ComplexTabs = ({ groups, isTabActive, onClick, children }) => {
	return <div className="group-tabs-nav-holder">
		<ul className="group-tabs-nav">
			{
				groups.map((group, index) => (
					<ComplexTab
						key={group.id}
						number={index + 1}
						group={group}
						active={isTabActive(group.id)}
						onClick={onClick} />
				))
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
		fields: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})).isRequired,
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

export default branch(
	({ show }) => show,

	withHandlers({ isTabActive }),

	renderNothing,
)(ComplexTabs);
