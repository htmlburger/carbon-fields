/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { withHandlers } from 'recompose';

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
const ContainerTabsNav = ({ tabs, handleClick }) => {
	return <ul className="carbon-tabs-nav">
		{
			tabs.map(({ id, name, active}) => (
				<li key={id} className={cx({ active })}>
					<a href="#" onClick={handleClick(id)}>{name}</a>
				</li>
			))
		}
	</ul>;
};

/**
 * Handle the `click` event on the links
 *
 * @param  {Object}   props
 * @param  {Function} props.onClick
 * @return {Function}
 */
const handleClick = ({ onClick }) => tabId => preventDefault(() => onClick(tabId));

export default withHandlers({ handleClick })(ContainerTabsNav);
