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
const TextField = ({ id, field }: { id: string, field: Object }) => {
	return <Field id={id} field={field}>
		<input id={id} type="text" name={field.name} defaultValue={field.value} className="regular-text" />
	</Field>;
};

export default withConnectToStore(TextField);
