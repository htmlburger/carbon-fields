/**
 * Internal dependencies.
 */
import { createRegistry } from './base';

export const {
	registerFieldType,
	getFieldType
} = createRegistry( 'field' );
