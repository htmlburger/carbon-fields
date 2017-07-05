/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

/**
 * Render a small notice when the complex field doesn't have entries.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   props.label
 * @param  {Boolean} 	   props.visible
 * @param  {Function} 	   props.handleClick
 * @return {React.Element}
 */
export const ComplexEmptyNotice = ({
	label,
	visible,
	handleClick
}) => {
	return <div
		className={cx('carbon-empty-row', { 'carbon-empty-row-visible': visible })}
		dangerouslySetInnerHTML={{ __html: carbonFieldsL10n.field.complexNoRows.replace('%s', label) }}
		onClick={handleClick} />;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexEmptyNotice.propTypes = {
	label: PropTypes.string,
	visible: PropTypes.bool,
	onClick: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = withHandlers({
	handleClick: ({ onClick }) => preventDefault(() => onClick()),
});

export default enhance(ComplexEmptyNotice);
