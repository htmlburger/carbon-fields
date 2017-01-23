import React from 'react';

/**
 * Render a radio input field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleInputChange
 * @param  {Function} props.isChecked
 * @return {React.Element}
 */
export default ({ name, field, handleInputChange, isChecked }) => {
	return <ul className="carbon-radio-list">
			{field.options.map(option => {
				return <li key={`${field.id}-${option.name}`}>
					<label>
						<input
							type="radio"
							name={field.name}
							value={option.value}
							checked={isChecked(option)}
							onChange={handleInputChange} />

						{option.name}
					</label>
				</li>;
			})}
		</ul>
};