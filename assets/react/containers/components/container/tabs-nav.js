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
import { preventDefault } from 'lib/helpers';

/**
 * Render the tabs navigation of the container.
 *
 * @param  {Object}        props
 * @param  {Array}         prop.tabs
 * @param  {Function}      prop.handleClick
 * @return {React.Element}
 */
export const ContainerTabsNav = ({ tabs, handleClick }) => {
	return <ul className="carbon-tabs-nav">
		{
			tabs.map(({ id, name, active }) => (
				<li key={id} className={cx({ active })}>
					<a href="#" onClick={handleClick(id)}>{name}</a>
				</li>
			))
		}
	</ul>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ContainerTabsNav.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		active: PropTypes.bool,
	})),
	handleClick: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * The handlers passed to the component.
	 */
	withHandlers({
		handleClick: ({ onClick }) => tabId => preventDefault(() => onClick(tabId)),
	})
);

/**
 * Enhance the component.
 *
 * @type {React.Component}
 */
const EnhancedContainerTabsNav = enhance(ContainerTabsNav);

/**
 * Validate the props.
 *
 * @type {Object}
 */
EnhancedContainerTabsNav.propTypes = {
	onClick: PropTypes.func,
};

export default EnhancedContainerTabsNav;
