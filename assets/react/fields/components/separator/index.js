/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a visual separator between adjacent fields.
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

/**
 * Validate the props.
 *
 * @type {Object}
 */
SeparatorField.propTypes = {
	field: PropTypes.shape({
		label: PropTypes.string.isRequired,
	}).isRequired,
};

export default compose(
	withStore(),
	withSetup()
)(SeparatorField);
