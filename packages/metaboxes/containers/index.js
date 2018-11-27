/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Carbon Fields dependencies.
 */
import { withFilters } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import { registerContainerType } from './registry';
import PostMetaContainer from './post-meta';
import TermMetaContainer from './term-meta';
import UserMetaContainer from './user-meta';
import CommentMetaContainer from './comment-meta';
import ThemeOptionsContainer from './theme-options';
import NavMenuItemContainer from './nav-menu-item';
import WidgetContainer from './widget';

/**
 * Extends the containers with necessary hooks.
 */
addFilter( 'carbon-fields.register-container-type', 'carbon-fields/metaboxes', ( type, context, component ) => {
	return withFilters( `carbon-fields.${ type }-container.${ context }` )( component );
} );

/**
 * Registers the containers.
 */
[
	[ 'post_meta', PostMetaContainer ],
	[ 'term_meta', TermMetaContainer ],
	[ 'user_meta', UserMetaContainer ],
	[ 'comment_meta', CommentMetaContainer ],
	[ 'network', ThemeOptionsContainer ],
	[ 'theme_options', ThemeOptionsContainer ],
	[ 'nav_menu_item', NavMenuItemContainer ],
	[ 'widget', WidgetContainer ]
].forEach( ( container ) => registerContainerType( ...container ) );
