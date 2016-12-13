/* @flow */

import React from 'react';
import cx from 'classnames';

/**
 * The base UI component used for rendering.
 * All fields should use composition to extend this component.
 *
 * @param  {Object} props
 * @return {React.Element}
 * @abstract
 */
const Field = ({ field, children }: FieldProps): React$Element<*> => {
	const classes = cx('carbon-field', `carbon-${field.type}`, {
		'has-width': field.width,
		[`width-${field.width}`]: field.width,
	});

	return <div className={classes}>
		<label htmlFor={field.id}>
			{field.label}
			{field.required ? <span className="carbon-required">*</span> : ''}
		</label>

		<div className={cx('field-holder', field.id)}>
			{children}
		</div>

		{field.help_text ? <em className="help-text">{field.help_text}</em> : ''}

		<em className="carbon-error"></em>
	</div>;
};

export default Field;
