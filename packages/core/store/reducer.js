/**
 * External dependencies.
 */
import { combineReducers } from '@wordpress/data';
import { omit } from 'lodash';

/**
 * The reducer that keeps track of the field validation.
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

export default combineReducers( {
	validation
} );
