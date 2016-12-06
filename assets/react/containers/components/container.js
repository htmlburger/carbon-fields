/* @flow */

import React from 'react';

/**
 * The base UI component used for rendering.
 * All containers should use composition to extend this component.
 *
 * @abstract
 */
const Container = (props: Object) => {
	return <div style={{ height: 1300 }}>
		container here
	</div>;
};

export default Container;
