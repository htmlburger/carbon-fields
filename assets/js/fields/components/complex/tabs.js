/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
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
export const ComplexTabs = ({
	groups,
	isTabActive,
	onClick,
	children
}) => {
	return <div className="group-tabs-nav-holder">
		<ul className="group-tabs-nav">
			{
				groups.map((group, index) => (
					<ComplexTab
						key={index}
						index={index}
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
		id: PropTypes.string,
		fields: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})),
	})),
	show: PropTypes.bool,
	current: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.element,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = branch(
	/**
	 * Test to see if the tabs should be rendered.
	 */
	({ show }) => show,

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		isTabActive: ({ current }) => groupId => groupId === current,
	}),

	/**
	 * Render the empty component.
	 */
	renderNothing
);

export default enhance(ComplexTabs);
