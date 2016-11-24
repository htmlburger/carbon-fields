/* @flow */

import React from 'react';
import Container from 'containers/components/container';
import ContainerPostMeta from 'containers/components/container-post-meta';

/**
 * A dictionary of the supported containers.
 *
 * @type {Object}
 */
const containers: Object = {
	// 'Post_Meta': ContainerPostMeta,
};

/**
 * Determine which container should be rendered for the specified type.
 *
 * @param  {String} type
 * @param  {Object} props
 * @return {React.Element}
 */
export function makeContainer(type: string, props?: Object = {}): React$Element<*> {
	const Component = containers[type] || Container;

	return <Component {...props} />;
}
