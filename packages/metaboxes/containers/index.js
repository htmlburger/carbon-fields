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
