/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import Field from 'fields/components/field';

/**
 * Render a notice to inform the user that the field doesn't have
 * any options.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {React.Element}
 *
 * TODO: Fix the translation.
 */
const NoOptions = ({ field }) => {
	return <Field field={field}>
		<em>No options.</em>
	</Field>
}

/**
 * Validate the props.
 *
 * @type {Object}
 */
NoOptions.propTypes ={
	field: PropTypes.object.isRequired,
};

export default NoOptions;
