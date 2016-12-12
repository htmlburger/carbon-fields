/* @flow */

import React from 'react';
import Field from 'fields/components/field';
import withConnectToStore from 'fields/decorators/with-connect-to-store';

/**
 * @param  {Object} props
 * @return {React.Element}
 */
const TextareaField = ({ field }: FieldProps): React$Element<*> => {
	const style = {
		height: field.height,
	};

	return <Field id={field.uuid} field={field}>
		<textarea
			id={field.uuid}
			name={field.name}
			defaultValue={field.value}
			style={style}
			rows={field.rows ? field.rows : null} />
	</Field>;
};

export default withConnectToStore(TextareaField);
