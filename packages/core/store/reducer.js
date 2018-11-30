/**
 * External dependencies.
 */
import { combineReducers } from '@wordpress/data';
import { omit, without } from 'lodash';

/**
 * The reducer that keeps track of the field's validation status.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function validation( state = {}, action ) {
	switch ( action.type ) {
		case 'MARK_AS_VALID':
			return omit( state, [ action.payload.fieldId ] );

		case 'MARK_AS_INVALID':
			const { fieldId, error } = action.payload;

			return {
				...state,
				[ fieldId ]: error
			};

		default:
			return state;
	}
}

/**
 * The reducer that keeps track of the fields that are hidden
 * by conditional logic.
 *
 * @param  {string[]} state
 * @param  {Object}   action
 * @return {Object}
 */
export function hiddenFields( state = [], action ) {
	switch ( action.type ) {
		case 'SHOW_FIELD':
			if ( state.indexOf( action.payload.fieldId ) === -1 ) {
				return state;
			}

			return without( state, action.payload.fieldId );

		case 'HIDE_FIELD':
			if ( state.indexOf( action.payload.fieldId ) > -1 ) {
				return state;
			}

			return state.concat( action.payload.fieldId );

		default:
			return state;
	}
}

export default combineReducers( {
	validation,
	hiddenFields
} );
