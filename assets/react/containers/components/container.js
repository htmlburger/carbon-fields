/* @flow */

import React from 'react';
import cx from 'classnames';
import { makeField } from 'lib/factory';

/**
 * The base UI component used for rendering.
 * All containers should use composition to extend this component.
 *
 * @abstract
 */
const Container = ({ id, fields }: { id: string, fields: Object[] }) => {
	return <div className={cx('carbon-container', `carbon-container-${id}`)}>
		{fields.map(({ id, type }) => makeField(type, { id }))}
	</div>;
};

export default Container;
