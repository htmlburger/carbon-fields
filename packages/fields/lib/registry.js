/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { withFilters } from '@wordpress/components';
import { isString, isFunction } from 'lodash';

/**
 * Keeps track of registered field types.
 *
 * @type {Object}
 */
const fieldTypes = {};

/**
 * Registers a new field types.
 *
 * @param  {string} type
 * @param  {Object} component
 * @return {boolean}
 */
export function registerFieldType( type, component ) {
	if ( ! isString( type ) ) {
		console.error( 'Field types must be a string.' );
		return false;
	}

	if ( fieldTypes[ type ] ) {
		console.error( `Field ${ type } is already registered.` );
		return false;
	}

	if ( ! component || ! isFunction( component ) ) {
		console.error( 'The "component" param must be a function.' );
		return false;
	}

	fieldTypes[ type ] = component;

	return true;
}

/**
 * Returns a registered field type.
 *
 * @param  {string} type
 * @param  {string} context
 * @return {?Object}
 */
export function getFieldType( type, context ) {
	if ( ! [ 'classic', 'gutenberg' ].includes( context ) ) {
		console.error( 'The provided context isn\'t a valid one. Must be "classic" or "gutenberg".' );
		return;
	}

	const fieldType = fieldTypes[ type ];

	if ( ! fieldType ) {
		console.error( `Field ${ type } isn\'t registered.` );
		return;
	}

	return withFilters( `carbon-fields.${ type }-field.${ context }` )( fieldType );
}
