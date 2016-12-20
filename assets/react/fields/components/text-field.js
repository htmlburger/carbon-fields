import React from 'react';
import { compose } from 'recompose';

import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a text input field.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {React.Element}
 */
export const TextField = ({ field, updateField }) => {
	return <Field id={field.id} field={field}>
		<input
			type="text"
			id={field.id}
			name={field.name}
			defaultValue={field.value}
			className="regular-text"
			onChange={({ target }) => updateField(field.id, { value: target.value })} />
	</Field>;
};

export default compose(
	withStore(),
	withSetup()
)(TextField);
