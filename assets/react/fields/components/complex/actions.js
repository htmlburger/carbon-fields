/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

/**
 * Render the 'Add Entry' button.
 *
 * @param  {Object}        props
 * @param  {String}        props.buttonText
 * @param  {React.Element} props.children
 * @param  {Function}      props.handleClick
 * @return {React.Element}
 */
export const ComplexActions = ({
	buttonText,
	children,
	handleClick
}) => {
	return <div className="carbon-actions">
		<div className="carbon-button">
			<a href="#" className="button" onClick={handleClick}>
				{buttonText}
			</a>

			{children}
		</div>
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexActions.propTypes = {
	buttonText: PropTypes.string,
	onButtonClick: PropTypes.func,
	children: PropTypes.element,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = withHandlers({
	handleClick: ({ onButtonClick }) => preventDefault(() => onButtonClick()),
});

export default enhance(ComplexActions);
