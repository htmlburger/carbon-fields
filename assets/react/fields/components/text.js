/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a text input field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @return {React.Element}
 */
export const TextField = ({ name, field, handleChange }) => {
	return <Field field={field}>
		<input
			type="text"
			id={field.id}
			name={name}
			value={field.value}
			className="regular-text"
			onChange={handleChange} />
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
const handleChange = ({ field, updateField }) => ({ target: { value } }) => updateField(field.id, { value });

export default compose(
	withStore(),
	withSetup(),
	withHandlers({ handleChange })
)(TextField);
