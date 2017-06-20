/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_SEPARATOR } from 'fields/constants';

/**
 * Render a visual separator between adjacent fields.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {React.Element}
 */
export const SeparatorField = ({
	field
}) => {
	return <Field field={field} showLabel={false}>
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
		label: PropTypes.string,
	}),
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Connect to the Redux store.
	 */
	withStore(),

	/**
	 * Attach the setup hooks.
	 */
	withSetup()
);

export default setStatic('type', [
	TYPE_SEPARATOR,
])(enhance(SeparatorField));
