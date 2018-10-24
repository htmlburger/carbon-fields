/**
 * Internal dependencies.
 */
import { registerContainerType } from './registry';
import BaseContainer from './base';

/**
 * Registers the containers.
 */
[
	[ 'post_meta', BaseContainer ]
].forEach( ( container ) => registerContainerType( ...container ) );
