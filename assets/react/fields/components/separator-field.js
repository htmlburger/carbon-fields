/* @flow */

import React from 'react';
import Field from 'fields/components/field';
import withConnectToStore from 'fields/decorators/with-connect-to-store';

/**
 * @param  {Object} props
 * @return {React.Element}
 */
const SeparatorField = ({ field }: FieldProps): React$Element<*> => {
	return <Field id={field.uuid} field={field}>
		<h3>{field.label}</h3>
	</Field>;
};

export default withConnectToStore(SeparatorField);
