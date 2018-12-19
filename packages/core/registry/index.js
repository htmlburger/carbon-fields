/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { applyFilters } from '@wordpress/hooks';
import { __, sprintf } from '@wordpress/i18n';
import {
	isString,
	isFunction,
	startCase
} from 'lodash';

/**
 * Creates a new registry.
 *
 * @param  {string}   domain
 * @param  {string[]} supportedContexts
 * @return {boolean}
 */
export function createRegistry( domain, supportedContexts ) {
	const domainStartCased = startCase( domain );

	/**
	 * Keeps track of registered types.
	 *
	 * @type {Object}
	 */
	const types = {};

	/**
	 * Registers a new type.
	 *
	 * @param  {string} type
	 * @param  {Function} component
	 * @return {boolean}
	 */
	function registerType( type, component ) {
		if ( ! isString( type ) ) {
			console.error( sprintf( __( '%1$s type must be a string.', 'carbon-fields-ui' ), domainStartCased ) );
			return false;
		}

		if ( types[ type ] ) {
			console.error( sprintf(
				__( '%1$s %2$s is already registered.', 'carbon-fields-ui' ),
				domainStartCased,
				type
			) );
			return false;
		}

		if ( ! component || ! isFunction( component ) ) {
			console.error( __( 'The "component" param must be a function.', 'carbon-fields-ui' ) );
			return false;
		}

		types[ type ] = supportedContexts.reduce( ( accumulator, context ) => {
			return {
				...accumulator,
				[ context ]: applyFilters( `carbon-fields.register-${ domain }-type`, type, context, component )
			};
		}, {} );

		return true;
	}

	/**
	 * Returns a registered type.
	 *
	 * @param  {string} type
	 * @param  {string} context
	 * @return {?Object}
	 */
	function getType( type, context ) {
		if ( ! supportedContexts.includes( context ) ) {
			console.error(
				sprintf(
					__( 'The provided context isn\'t a valid one. Must be one of - %s .', 'carbon-fields-ui' ),
					supportedContexts.join( ', ' )
				)
			);
			return;
		}

		if ( ! types[ type ] ) {
			console.error(
				sprintf(
					__( '%s %s isn\'t registered.', 'carbon-fields-ui' ),
					domainStartCased,
					type
				)
			);
			return;
		}

		return types[ type ][ context ];
	}

	return {
		[ `register${ domainStartCased }Type` ]: registerType,
		[ `get${ domainStartCased }Type` ]: getType
	};
}
