/* @flow */

import React from 'react';
import BrokenContainer from 'containers/components/broken-container';
import PostMetaContainer from 'containers/components/post-meta-container';
import CommentMetaContainer from 'containers/components/comment-meta-container';
import * as ContainerConst from 'containers/constants';

/**
 * A dictionary of the supported containers.
 *
 * @type {Object}
 */
const containers: Object = {
	[ContainerConst.TYPE_POST_META]: PostMetaContainer,
	[ContainerConst.TYPE_COMMENT_META]: CommentMetaContainer,
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
