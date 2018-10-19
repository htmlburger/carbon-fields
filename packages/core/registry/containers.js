/**
 * Internal dependencies.
 */
import { createRegistry } from './base';

export const {
	registerContainerType,
	getContainerType
} = createRegistry( 'container', [
	'classic',
	'gutenberg'
] );

