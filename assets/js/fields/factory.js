/**
 * The external dependencies.
 */
import React from 'react';

/**
 * The internal dependencies.
 */
import { getFieldComponent } from 'lib/registry';

/**
 * Render a new field.
 *
 * @param  {String}        type
 * @param  {Object}        props
 * @return {React.Element}
 */
export default function(type, props = {}) {
	const Component = getFieldComponent(type);

	return <Component
		key={props.id}
		type={type}
		{...props} />;
}
