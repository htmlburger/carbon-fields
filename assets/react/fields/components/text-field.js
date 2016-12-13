/* @flow */

import React from 'react';
import Field from 'fields/components/field';
import createConnectStore from 'fields/decorators/connect-to-store';

/**
 * Render a text input field.
 *
 * @param  {Object} props
 * @return {React.Element}
 */
const TextField = ({ field, setValue }: FieldProps): React$Element<*> => {
	return <Field id={field.id} field={field}>
		<input
			type="text"
			id={field.id}
			name={field.name}
			defaultValue={field.value}
			className="regular-text"
			onChange={(e) => setValue(field.id, e.target.value)} />
	</Field>;
};

export default createConnectStore()(TextField);
