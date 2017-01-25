/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withProps, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a checkbox input field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Boolean}  props.checked
 * @param  {Function} props.handleChange
 * @return {React.Element}
 */
export const CheckboxField = ({ name, field, checked, handleChange }) => {
	return <Field field={field}>
		<label>
			<input
				type="checkbox"
				name={name}
				value={field.option_value}
				checked={checked}
				onChange={handleChange} />

			{field.option_label}
		</label>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
CheckboxField.propTypes = {
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string,
		option_value: PropTypes.string.isRequired,
	}).isRequired,
	checked: PropTypes.bool.isRequired,
	handleChange: PropTypes.func.isRequired,
};

/**
 * Additional props that will be passed to the component.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Object}
 */
const props = ({ field }) => ({
	checked: field.value === field.option_value,
});

/**
 * Sync the input value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleChange = ({ field, updateField }) => ({ target }) => {
	updateField(field.id, {
		value: target.checked ? field.option_value : null,
	});
};

export default compose(
	withStore(),
	withSetup(),
	withProps(props),
	withHandlers({ handleChange })
)(CheckboxField);
