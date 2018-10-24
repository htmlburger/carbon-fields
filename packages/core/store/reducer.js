/**
 * External dependencies.
 */
import produce from 'immer';
import { combineReducers } from '@wordpress/data';

/**
 * The reducer that keeps track of the containers.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function containers( state = {}, action ) {
	switch ( action.type ) {
		case 'SETUP_STATE':
			return action.payload.containers;

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
		case 'SETUP_STATE':
			return action.payload.fields;

		case 'UPDATE_FIELD_VALUE':
			return produce( state, ( draft ) => {
				const { fieldId, value } = action.payload;

				draft[ fieldId ].value = value;
			} );

		default:
			return state;
	}
}

export default combineReducers( {
	containers,
	fields
} );
