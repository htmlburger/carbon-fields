import React from 'react';

import BrokenContainer from 'containers/components/broken-container';
import PostMetaContainer from 'containers/components/post-meta-container';
import CommentMetaContainer from 'containers/components/comment-meta-container';
import TermMetaContainer from 'containers/components/term-meta-container';
import UserMetaContainer from 'containers/components/user-meta-container';
import ThemeOptionsContainer from 'containers/components/theme-options-container';
import * as ContainerConst from 'containers/constants';

import Field from 'fields/components/field';
import FileField from 'fields/components/file-field';
import TextField from 'fields/components/text-field';
import TextareaField from 'fields/components/textarea-field';
import SeparatorField from 'fields/components/separator-field';
import HeaderScriptsField from 'fields/components/header-scripts-field';
import FooterScriptsField from 'fields/components/footer-scripts-field';
import ColorField from 'fields/components/color-field';
import CheckboxField from 'fields/components/checkbox-field';
import * as FieldConst from 'fields/constants';

/**
 * A dictionary of the supported containers.
 *
 * @type {Object}
 */
const containers = {
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
 * @param  {Object} [props]
 * @return {React.Element}
 */
export function makeContainer(type, props = {}) {
	const Component = containers[type] || BrokenContainer;

	return <Component {...props} />;
}

/**
 * A dictionary of the supported containers.
 *
 * @type {Object}
 */
const fields: Object = {
	[FieldConst.TYPE_FILE]: FileField,
	[FieldConst.TYPE_TEXT]: TextField,
	[FieldConst.TYPE_TEXTAREA]: TextareaField,
	[FieldConst.TYPE_SEPARATOR]: SeparatorField,
	[FieldConst.TYPE_HEADER_SCRIPTS]: HeaderScriptsField,
	[FieldConst.TYPE_FOOTER_SCRIPTS]: FooterScriptsField,
	[FieldConst.TYPE_COLOR]: ColorField,
	[FieldConst.TYPE_CHECKBOX]: CheckboxField,
};

/**
 * Determine which field should be rendered for the specified type.
 *
 * @param  {String} type
 * @param  {Object} [props]
 * @return {React.Element}
 */
export function makeField(type, props = {}) {
	const Component = fields[type];

	if (!Component) {
		return null;
	}

	return <Component key={props.id} type={type} {...props} />;
}
