/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
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
 * @param  {Object} props
 * @param  {Object} props.field
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
		html: PropTypes.string.isRequired,
	}).isRequired,
};

export default setStatic('type', [TYPE_HTML])(
	compose(
		withStore(),
		withSetup()
	)(HtmlField)
);
