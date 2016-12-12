/* @flow */

import React from 'react';
import Field from 'fields/components/field';
import withConnectToStore from 'fields/decorators/with-connect-to-store';

/**
 * @param  {Object} props
 * @return {React.Element}
 */
const TextField = ({ field }: FieldProps): React$Element<*> => {
	return <Field id={field.uuid} field={field}>
		<input id={field.uuid} type="text" name={field.name} defaultValue={field.value} className="regular-text" />
	</Field>;
};

export default withConnectToStore(TextField);
