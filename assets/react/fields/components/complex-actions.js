/**
 * The external dependencies.
 */
import React from 'react';
import { PropTypes } from 'react';
import { withHandlers } from 'recompose';

/**
 * Renders the buttons of complex field.
 *
 * @param  {Object}        props
 * @param  {String}        props.buttonText
 * @param  {Function}      props.handleClick
 * @param  {React.Element} props.children
 * @return {React.Element}
 */
export const ComplexActions = ({ handleClick, buttonText, children }) => {
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
};

/**
 * @param  {Object}   props
 * @param  {Function} props.onButtonClick
 * @return {Function}
 */
const handleClick = ({ onButtonClick }) => {
	/**
	 * @inner
	 * @param  {Event} e
	 * @return {void}
	 */
	return (e) => {
		e.preventDefault();

		onButtonClick();
	};
};

export default withHandlers({
	handleClick
})(ComplexActions);
