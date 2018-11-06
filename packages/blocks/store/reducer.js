/**
 * External dependencies.
 */
import produce from 'immer';
import { forEach } from 'lodash';
import { combineReducers } from '@wordpress/data';

/**
 * The reducer that keeps track of field defitions keyed by block's name.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function fieldDefinitionsByBlockName( state = {}, action ) {
	switch ( action.type ) {
		case 'SETUP_FIELD_DEFINITIONS':
			return action.payload.definitions;

		default:
			return state;
	}
}

/**
 * The reducer that keeps track of the fields.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function fields( state = {}, action ) {
	switch ( action.type ) {
		case 'RECEIVE_ASSOCIATION_OPTIONS':
			return produce( state, ( draft ) => {
				forEach( draft, ( field ) => {
					if ( field.type === 'association' ) {
						field.options.unshift( action.payload );
					}
				} );
			} );

		default:
			return state;
	}
}

export default combineReducers( {
	fieldDefinitionsByBlockName,
	fields
} );
