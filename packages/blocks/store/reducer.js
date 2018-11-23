/**
 * External dependencies.
 */
import produce from 'immer';
import { combineReducers } from '@wordpress/data';
import { omit } from 'lodash';

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
 * The reducer that keeps track of validation errors keyed by field's id.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function validationErrorsByFieldId( state = {}, action ) {
	switch ( action.type ) {
		case 'SET_VALIDATION_ERROR':
			const { fieldId, error } = action.payload;

			return produce( state, ( draft ) => {
				draft[ fieldId ] = error;
			} );

		case 'CLEAR_VALIDATION_ERROR':
			return omit( state, [ action.payload.fieldId ] );

		default:
			return state;
	}
}

export default combineReducers( {
	fieldDefinitionsByBlockName,
	validationErrorsByFieldId
} );
