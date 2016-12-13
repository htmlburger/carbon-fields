/* @flow */

import React from 'react';
import Field from 'fields/components/field';
import createConnectStore from 'fields/decorators/connect-to-store';

/**
 * Create a visual separator between adjacent fields.
 *
 * @param  {Object} props
 * @return {React.Element}
 */
const SeparatorField = ({ field }: FieldProps): React$Element<*> => {
	return <Field field={field}>
		<h3>{field.label}</h3>
	</Field>;
};

export default createConnectStore()(SeparatorField);
