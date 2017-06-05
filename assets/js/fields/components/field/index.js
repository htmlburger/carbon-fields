/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * The base component used to render the fields.
 * Extending of this component is done via composition.
 *
 * @abstract
 * @param  {Object} 					   props
 * @param  {Object} 					   props.field
 * @param  {React.Element|React.Element[]} props.children
 * @return {React.Element}
 */
export const Field = ({ field, children, hide_required_label }) => {
	const styles = !!field.width ? { flexBasis: `${field.width}%`} : null;
	const classes = [
		'carbon-field',
		`carbon-${field.type}`,
		{ 'has-width': !!field.width },
		{ 'carbon-highlight': !field.ui.valid },
		...field.classes,
	];

	return <div className={cx(classes)} style={styles} hidden={!field.ui.is_visible}>
		<label htmlFor={field.id}>
			{field.label}

			{
				(field.required && !hide_required_label)
				? <span className="carbon-required">*</span>
				: null
			}
		</label>

		<div className="field-holder">
			{children}
		</div>

		{
			!!field.help_text
			? <em className="help-text">{field.help_text}</em>
			: null
		}

		{
			!!field.ui.error
			? <em className="carbon-error">{field.ui.error}</em>
			: null
		}
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
Field.propTypes = {
	field: PropTypes.shape({
		id: PropTypes.string,
		type: PropTypes.string,
		label: PropTypes.string,
		required: PropTypes.bool,
		help_text: PropTypes.string,
		width: PropTypes.number,
	}),
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
	hide_required_label: PropTypes.bool,
};

export default Field;
