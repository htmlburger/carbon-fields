import React from 'react';
import { compose } from 'recompose';

import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { registerFieldComponent } from 'lib/registry';

/**
 * Render a multiline text input field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {React.Element}
 */
export const TextareaField = ({ field, updateField }) => {
	const style = {
		height: field.height,
	};

	return <Field field={field}>
		<textarea
			id={field.id}
			name={field.name}
			defaultValue={field.value}
			style={style}
			rows={field.rows ? field.rows : null}
			onChange={({ target }) => updateField(field.id, { value: target.value })} />
	</Field>;
};

export default registerFieldComponent('Textarea', compose(
	withStore(),
	withSetup()
)(TextareaField));
