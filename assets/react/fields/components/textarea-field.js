/* @flow */

import React from 'react';
import Field from 'fields/components/field';
import createConnectStore from 'fields/decorators/connect-to-store';

/**
 * Render a multiline text input field.
 *
 * @param  {Object} props
 * @return {React.Element}
 */
const TextareaField = ({ field, setValue }: FieldProps): React$Element<*> => {
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
			onChange={(e) => setValue(field.id, e.target.value)} />
	</Field>;
};

export default createConnectStore()(TextareaField);
