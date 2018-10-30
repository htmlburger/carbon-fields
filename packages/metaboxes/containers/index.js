/**
 * Internal dependencies.
 */
import { registerContainerType } from './registry';
import PostMetaContainer from './post-meta';

/**
 * Registers the containers.
 */
[
	[ 'post_meta', PostMetaContainer ]
].forEach( ( container ) => registerContainerType( ...container ) );
