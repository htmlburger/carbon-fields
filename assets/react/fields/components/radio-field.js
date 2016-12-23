import React from 'react';
import { compose, withHandlers, branch, renderComponent } from 'recompose';

import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { registerFieldComponent } from 'lib/registry';

/**
 * Render a radio input field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.handleInputChange
 * @param  {Function} props.isChecked
 * @return {React.Element}
 */
export const RadioField = ({ field, handleInputChange, isChecked }) => {
	return <Field field={field}>
		<ul className="carbon-radio-list">
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

export default registerFieldComponent('Radio', compose(
	withStore(),
	branch(
		({ field: { options } }) => !options.length,

		renderComponent(NoOptions),

		compose(
			withSetup(),
			withHandlers({ handleInputChange, isChecked })
		)
	)
)(RadioField));
