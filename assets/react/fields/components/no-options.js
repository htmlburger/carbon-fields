import React from 'react';
import Field from 'fields/components/field';

/**
 * Render a notice to inform the user that the field doesn't have
 * any options.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {React.Element}
 *
 * @todo Fix the translation.
 */
const NoOptions = ({ field }) => {
	return <Field field={field}>
		<em>No options.</em>
	</Field>
}

export default NoOptions;
