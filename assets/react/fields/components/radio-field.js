import React from 'react';
import { compose, withHandlers, branch, renderComponent } from 'recompose';
import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/connect-to-store';

/**
 * Render a radio input field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.handleInputChange
 * @param  {Function} props.isChecked
 * @return {React.Element}
 */
const RadioField = ({ field, handleInputChange, isChecked }) => {
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
				</li>
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
const handleInputChange = ({ field, updateField }) => {
	return ({ target }) => {
		updateField(field.id, {
			value: target.value
		});
	};
};

/**
 * Check if the specified option is checked.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Function}
 */
const isChecked = ({ field }) => option => option.value === field.value;

/**
 * Check whether the field has options and if doesn't show the notice.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Boolean}
 */
const testForNoOptions = ({ field }) => !field.options.length;

export default compose(
	withStore(),
	branch(testForNoOptions, renderComponent(NoOptions), c => c),
	withHandlers({ handleInputChange, isChecked })
)(RadioField);
