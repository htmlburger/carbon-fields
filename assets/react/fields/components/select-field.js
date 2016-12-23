import React from 'react';
import { compose, withHandlers, branch, renderComponent } from 'recompose';

import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { registerFieldComponent } from 'lib/registry';

/**
 * Render a select input field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.handleInputChange
 * @return {React.Element}
 */
export const SelectField = ({ field, handleInputChange }) => {
	return <Field field={field}>
		<select id={field.id} name={field.name} onChange={handleInputChange}>
			{field.options.map(option => {
				return <option key={`${field.id}-${option.name}`} value={option.value}>
					{option.name}
				</option>;
			})}
		</select>
	</Field>;
};

/**
 * The lifecycle hooks that will be attached to the field.
 *
 * @type {Object}
 */
const hooks = {
	componentDidMount() {
		// If the field doesn't have a value,
		// use the first option as fallback value.
		if (!this.props.field.value) {
			this.props.updateField(this.props.id, {
				value: this.props.field.options[0].value
			});
		}

		this.props.setupField(this.props.id, this.props.type);
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
const handleInputChange = ({ field, updateField }) => ({ target }) => {
	updateField(field.id, {
		value: target.value
	});
};

export default registerFieldComponent('Select', compose(
	withStore(),
	branch(
		({ field: { options } }) => !options.length,

		renderComponent(NoOptions),

		compose(
			withSetup(hooks),
			withHandlers({ handleInputChange })
		)
	)
)(SelectField));
