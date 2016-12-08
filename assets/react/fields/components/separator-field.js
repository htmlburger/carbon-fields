/* @flow */

import React from 'react';
import Field from 'fields/components/field';
import withConnectToStore from 'fields/decorators/with-connect-to-store';

/**
 * Used for presentation purposes to create sections between fields.
 *
 * @param  {Object} props
 * @return {React.Element}
 */
const SeparatorField = ({ id, field }: { id: string, field: Object }) => {
	return <Field id={id} field={field}>
		<h3>{field.label}</h3>
	</Field>;
};

export default withConnectToStore(SeparatorField);
