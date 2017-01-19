import React from 'react';
import { compose, withHandlers, branch, renderComponent } from 'recompose';

import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

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
export const RadioImageField = ({ name, field, handleInputChange, isChecked }) => {
	return <Field field={field}>
		<div className="carbon-radio-image-list">
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
	</Field>;
};

/**
 * Sync the input value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleInputChange = ({ field, updateField }) => ({ target }) => {
	updateField(field.id, {
		value: target.value
	});
};

/**
 * Check if the specified option is checked.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Function}
 */
const isChecked = ({ field }) => option => option.value === field.value;

export default compose(
	withStore(),
	branch(
		({ field: { options } }) => !options.length,

		renderComponent(NoOptions),

		compose(
			withSetup(),
			withHandlers({ handleInputChange, isChecked })
		)
	)
)(RadioImageField);
