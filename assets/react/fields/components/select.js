/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers, branch, renderComponent } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a select input field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @return {React.Element}
 */
export const SelectField = ({ name, field, handleChange }) => {
	return <Field field={field}>
		<select
			id={field.id}
			name={name}
			onChange={handleChange}
			value={field.value}>

			{
				field.options.map((option) => {
					return <option key={`${field.id}-${option.name}`} value={option.value}>
						{option.name}
					</option>;
				})
			}
		</select>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
SelectField.propTypes = {
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})).isRequired,
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
};


/**
 * The lifecycle hooks that will be attached to the field.
 *
 * @type {Object}
 */
const hooks = {
	componentDidMount() {
		const {
			field,
			setupField,
			updateField,
		} = this.props;

		setupField(field.id, field.type);

		// If the field doesn't have a value,
		// use the first option as fallback.
		if (!field.value) {
			updateField(field.id, {
				value: field.options[0].value,
			});
		}
	}
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
	branch(
		({ field: { options } }) => !options.length,

		renderComponent(NoOptions),

		compose(
			withSetup(hooks),
			withHandlers({ handleChange })
		)
	)
)(SelectField);
