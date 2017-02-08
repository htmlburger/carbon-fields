/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
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
export const ComplexActions = ({ buttonText, children, handleClick }) => {
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
	buttonText: PropTypes.string.isRequired,
	onButtonClick: PropTypes.func.isRequired,
	children: PropTypes.element,
};

/**
 * Handle the click on the 'Add Entry' button.
 *
 * @param  {Object}   props
 * @param  {Function} props.onButtonClick
 * @return {Function}
 */
const handleClick = ({ onButtonClick }) => preventDefault(onButtonClick);

export default withHandlers({
	handleClick,
})(ComplexActions);
