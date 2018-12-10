/**
 * External dependencies.
 */
import { createRegistry } from '@carbon-fields/core';

export const {
	registerContainerType,
	getContainerType
} = createRegistry( 'container', [
	'classic',
	'gutenberg'
] );

