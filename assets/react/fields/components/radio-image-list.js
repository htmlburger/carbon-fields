import React from 'react';

/**
 * Render a radio input field with an image.
 *
 * @param  {Object}   props
 * @param  {Object}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleInputChange
 * @param  {Function} props.isChecked
 * @return {React.Element}
 */
export default ({ name, field, handleInputChange, isChecked }) => {
	return <div className="carbon-radio-image-list">
			{field.options.map((option) => {
				return <div
							key={`${field.id}-${option.name}`}
							className="carbon-radio-image-item"
						>
					<label>
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={isChecked(option)}
							onChange={handleInputChange} />

						<figure className="carbon-radio-image-holder">
							<img src={option.name} />
						</figure>
					</label>
				</div>;
			})}
		</div>
};