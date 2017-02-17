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
 * Render a small notice when the complex field doesn't have entries.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   props.label
 * @param  {Boolean} 	   props.visible
 * @param  {Function} 	   props.handleClick
 * @return {React.Element}
 */
export const ComplexEmptyNotice = ({ label, visible, handleClick }) => {
	return <div
		className={cx('carbon-empty-row', { 'carbon-empty-row-visible': visible })}
		dangerouslySetInnerHTML={{ __html: crbl10n.complex_no_rows.replace('%s', label) }}
		onClick={handleClick} />;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexEmptyNotice.propTypes = {
	label: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

/**
 * Handle the click on the link inside the label.
 *
 * @param  {Object}   props
 * @param  {Function} props.onClick
 * @return {Function}
 */
const handleClick = ({ onClick }) => preventDefault(onClick);

export default withHandlers({
	handleClick,
})(ComplexEmptyNotice);
