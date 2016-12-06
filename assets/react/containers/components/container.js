/* @flow */

import React from 'react';
import cx from 'classnames';

/**
 * The base UI component used for rendering.
 * All containers should use composition to extend this component.
 *
 * @abstract
 */
const Container = (props: Object) => {
	const classes = cx('carbon-container', `carbon-container-${props.id}`);

	return <div className={classes}>
		container here
	</div>;
};

export default Container;
