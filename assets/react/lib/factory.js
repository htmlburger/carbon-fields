/* @flow */

import React from 'react';
import BrokenContainer from 'containers/components/broken-container';
import PostMetaContainer from 'containers/components/post-meta-container';

/**
 * A dictionary of the supported containers.
 *
 * @type {Object}
 */
const containers: Object = {
	'Post_Meta': PostMetaContainer,
};

/**
 * Determine which container should be rendered for the specified type.
 *
 * @param  {String} type
 * @param  {Object} props
 * @return {React.Element}
 */
export function makeContainer(type: string, props?: Object = {}): React$Element<*> {
	const Component = containers[type] || BrokenContainer;

	return <Component {...props} />;
}
