/* @flow */

import React from 'react';
import Field from 'fields/components/field';
import withConnectToStore from 'fields/decorators/with-connect-to-store';

/**
 * @param  {Object} props
 * @return {React.Element}
 */
const TextField = ({ field, setValue }: FieldProps): React$Element<*> => {
	return <Field id={field.uuid} field={field}>
		<input
			type="text"
			id={field.uuid}
			name={field.name}
			defaultValue={field.value}
			className="regular-text"
			onChange={(e) => setValue(field.uuid, e.target.value)} />
	</Field>;
};

export default withConnectToStore(TextField);
