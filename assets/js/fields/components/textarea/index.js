/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import {
	TYPE_TEXTAREA,
	TYPE_HEADER_SCRIPTS,
	TYPE_FOOTER_SCRIPTS
} from 'fields/constants';

/**
 * Render a multiline text input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const TextareaField = ({
	name,
	field,
	handleChange
}) => {
	return <Field field={field}>
		<textarea
			id={field.id}
			name={name}
			value={field.value}
			rows={field.rows}
			disabled={!field.ui.is_visible}
			onChange={handleChange}
			 {...field.attributes} />
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
TextareaField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		rows: PropTypes.number,
		attributes: PropTypes.object,
	}),
	handleChange: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	withStore(),
	withSetup(),

	/**
	 * The handlers passed to the component.
	 */
	withHandlers({
		handleChange: ({ field, updateField }) => ({ target: { value } }) => updateField(field.id, { value }),
	})
);

/**
 * Enhance the component.
 *
 * @type {React.Component}
 */
const EnhancedTextareaField = setStatic('type', [
	TYPE_TEXTAREA,
	TYPE_HEADER_SCRIPTS,
	TYPE_FOOTER_SCRIPTS,
])(enhance(TextareaField));

/**
 * Validate the props.
 *
 * @type {Object}
 */
EnhancedTextareaField.propTypes = {
	updateField: PropTypes.func,
};

export default EnhancedTextareaField;
