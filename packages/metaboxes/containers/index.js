/**
 * Internal dependencies.
 */
import { registerContainerType } from './registry';
import PostMetaContainer from './post-meta';
import TermMetaContainer from './term-meta';
import UserMetaContainer from './user-meta';
import ThemeOptionsContainer from './theme-options';

/**
 * Registers the containers.
 */
[
	[ 'post_meta', PostMetaContainer ],
	[ 'term_meta', TermMetaContainer ],
	[ 'user_meta', UserMetaContainer ],
	[ 'theme_options', ThemeOptionsContainer ]
].forEach( ( container ) => registerContainerType( ...container ) );
