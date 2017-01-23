import React from 'react';
import { compose, withHandlers, branch, renderComponent } from 'recompose';

import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import RadioList from 'fields/components/radio-list';
import RadioImageList from 'fields/components/radio-image-list';

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
export const RadioField = ({ name, field, handleInputChange, isChecked }) => {
	const List = field.type === 'RadioImage' ? RadioImageList : RadioList;

	return <Field field={field}>
				<List 
					field={field}
					name={name}
					handleInputChange={handleInputChange}
					isChecked={isChecked}
				/>
			</Field>
}


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
)(RadioField);
