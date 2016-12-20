import React from 'react';
import { compose } from 'recompose';

import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
/**
 * Create a visual separator between adjacent fields.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {React.Element}
 */
export const SeparatorField = ({ field }) => {
	return <Field field={field}>
		<h3>{field.label}</h3>
	</Field>;
};

export default compose(
	withStore(),
	withSetup()
)(SeparatorField);

