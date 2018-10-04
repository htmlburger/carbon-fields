/**
 * External dependencies.
 */
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

export default combineReducers( {
	fieldDefinitionsByBlockName
} );
