/* @flow */

import React from 'react';

import BrokenContainer from 'containers/components/broken-container';
import PostMetaContainer from 'containers/components/post-meta-container';
import CommentMetaContainer from 'containers/components/comment-meta-container';
import TermMetaContainer from 'containers/components/term-meta-container';
import UserMetaContainer from 'containers/components/user-meta-container';
import ThemeOptionsContainer from 'containers/components/theme-options-container';
import * as ContainerConst from 'containers/constants';

import Field from 'fields/components/field';
import SeparatorField from 'fields/components/separator-field';
import * as FieldConst from 'fields/constants';

/**
 * A dictionary of the supported containers.
 *
 * @type {Object}
 */
const containers: Object = {
	[ContainerConst.TYPE_POST_META]: PostMetaContainer,
	[ContainerConst.TYPE_COMMENT_META]: CommentMetaContainer,
	[ContainerConst.TYPE_TERM_META]: TermMetaContainer,
	[ContainerConst.TYPE_USER_META]: UserMetaContainer,
	[ContainerConst.TYPE_THEME_OPTIONS]: ThemeOptionsContainer,
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

/**
 * A dictionary of the supported containers.
 *
 * @type {Object}
 */
const fields: Object = {
	[FieldConst.TYPE_SEPARATOR]: SeparatorField,
};

/**
 * Determine which field should be rendered for the specified type.
 *
 * @param  {String} type
 * @param  {Object} props
 * @return {React.Element}
 */
export function makeField(type: string, props: Object): React$Element<*> {
	const Component = fields[type];

	if (!Component) {
		return null;
	}

	return <Component key={props.id} {...props} />;
}
