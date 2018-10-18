/**
 * External dependencies.
 */
import { combineReducers } from '@wordpress/data';

/**
 * The reducer that keeps track of the containers.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function containers( state = {}, action ) {
	return state;
}

/**
 * The reducer that keeps track of the fields.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function fields( state = {}, action ) {
	return state;
}

export default combineReducers( {
	containers,
	fields
} );
