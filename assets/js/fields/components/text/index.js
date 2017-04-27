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
import { TYPE_TEXT } from 'fields/constants';

/**
 * Render a text input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const TextField = ({
	name,
	field,
	handleChange
}) => {
	return <Field field={field}>
		<input
			type="text"
			id={field.id}
			name={name}
			value={field.value}
			disabled={!field.ui.is_visible}
			className="regular-text"
			onChange={handleChange}
			 {...field.attributes}/>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
TextField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		attributes: PropTypes.object,
	}),
	handleChange: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
const enhance = compose(
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
const EnhancedTextField = setStatic('type', [
	TYPE_TEXT,
])(enhance(TextField));

/**
 * Validate the props.
 *
 * @type {Object}
 */
EnhancedTextField.propTypes = {
	updateField: PropTypes.func,
};

export default EnhancedTextField;
