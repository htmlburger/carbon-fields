/**
 * The external dependencies.
 */
import React from 'react';

/**
 * Renders the buttons of complex field.
 *
 * @param  {Object}   props
 * @param  {String}   props.buttonText
 * @param  {Function} props.onButtonClick
 * @return {React.Element}
 */
const ComplexActions = ({ onButtonClick, buttonText }) => {
	return <div className="carbon-actions">
		<div className="carbon-button">
			<a href="#" className="button" onClick={onButtonClick}>
				{buttonText}
			</a>
		</div>
	</div>;
};

export default ComplexActions;
