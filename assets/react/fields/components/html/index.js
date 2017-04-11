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
import { TYPE_HTML } from 'fields/constants';

/**
 * Render custom HTML markup.
 *
 * @param  {Object}        props
 * @param  {Object}        props.field
 * @return {React.Element}
 */
export const HtmlField = ({ field }) => {
	return <Field field={field}>
		<div dangerouslySetInnerHTML={{ __html: field.html }}></div>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
HtmlField.propTypes = {
	field: PropTypes.shape({
		html: PropTypes.string,
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
	TYPE_HTML,
])(enhance(HtmlField));
