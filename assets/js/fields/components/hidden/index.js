/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import { enhance } from 'fields/components/text';
import { TYPE_HIDDEN } from 'fields/constants';

/**
 * Render a hidden input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const HiddenField = ({
	name,
	field,
	handleChange
}) => {
	return <Field field={field} className="hidden">
		<input
			type="hidden"
			id={field.id}
			name={name}
			value={field.value}
			disabled={!field.ui.is_visible}
			className="hidden-text"
			onChange={handleChange}
			{...field.attributes} />
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
HiddenField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		attributes: PropTypes.object,
	}),
	handleChange: PropTypes.func,
};

/**
 * Enhance the component.
 *
 * @type {React.Component}
 */
const EnhancedHiddenField = setStatic('type', [
	TYPE_HIDDEN,
])(enhance(HiddenField));

export default EnhancedHiddenField;
