/**
 * Internal dependencies.
 */
import { createRegistry } from './';

export const {
	registerFieldType,
	getFieldType
} = createRegistry( 'field', [
	'metabox',
	'block'
] );
