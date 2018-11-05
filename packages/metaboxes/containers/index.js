/**
 * Internal dependencies.
 */
import { registerContainerType } from './registry';
import PostMetaContainer from './post-meta';
import TermMetaContainer from './term-meta';

/**
 * Registers the containers.
 */
[
	[ 'post_meta', PostMetaContainer ],
	[ 'term_meta', TermMetaContainer ]
].forEach( ( container ) => registerContainerType( ...container ) );
