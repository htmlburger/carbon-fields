/* @flow */

import React from 'react';
import cx from 'classnames';

type Props = {
	field: Object,
	children?: React$Element<*>
};

/**
 * The base UI component used for rendering.
 * All fields should use composition to extend this component.
 *
 * @abstract
 */
const Field = ({ field, children }: Props) => {
	return <div className={cx('carbon-field', `carbon-${field.type}`)}>
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
