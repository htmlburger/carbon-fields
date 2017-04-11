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

import withHeaderTemplate from 'fields/decorators/with-header-template';

/**
 * Render a tab in complex field.
 *
 * @param  {Object}        props
 * @param  {Number}        props.number
 * @param  {Object}        props.group
 * @param  {String}        props.label
 * @param  {Boolean}       props.active
 * @param  {Function}      props.handleClick
 * @return {React.Element}
 */
export const ComplexTab = ({
	number,
	group,
	label,
	active,
	handleClick
}) => {
	return <li
		id={group.id}
		className={cx('group-tab-item', { 'active': active })}>
			<a href="#" onClick={handleClick}>
				{
					label
					? <span
						className="group-name"
						dangerouslySetInnerHTML={{ __html: label }} />
					: null
				}

				<span className="group-number">{number}</span>
				<span className="dashicons dashicons-warning carbon-complex-group-error-badge" />
			</a>
	</li>
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexTab.propTypes = {
	number: PropTypes.number,
	group: PropTypes.shape({
		id: PropTypes.string,
		label: PropTypes.string,
		fields: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})),
	}),
	label: PropTypes.string,
	active: PropTypes.bool,
	handleClick: PropTypes.func,
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
		handleClick: ({ group, onClick }) => preventDefault(() => onClick(group.id)),
	})
);

export default enhance(ComplexTab);
