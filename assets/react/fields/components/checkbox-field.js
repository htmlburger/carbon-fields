import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';

import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a checkbox input field.
 *
 * @param  {Object}   props
 * @param  {Boolean}  props.isChecked
 * @param  {Function} props.handleInputChange
 * @return {React.Element}
 */
export const CheckboxField = ({ field, isChecked, handleInputChange }) => {
	return <Field field={field}>
		<label>
			<input
				type="checkbox"
				name={field.name}
				value={field.option_value}
				checked={isChecked}
				onChange={handleInputChange} />

			{field.option_label}
		</label>
	</Field>;
};

/**
 * Additional props that will be passed to the component.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Object}
 */
const props = ({ field }) => ({
	isChecked: field.value === field.option_value,
});

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
		value: target.checked ? field.option_value : null,
	});
};

export default compose(
	withStore(),
	withSetup(),
	withProps(props),
	withHandlers({ handleInputChange })
)(CheckboxField);
