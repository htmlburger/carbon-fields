/**
 * External dependencies.
 */
import produce from 'immer';
import { set, forEach } from 'lodash';
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

		case 'UPDATE_CONTAINER_META':
			return produce( state, ( draft ) => {
				const {
					containerId,
					key,
					value
				} = action.payload;

				set( draft, `${ containerId }.meta.${ key }`, value );
			} );

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

		case 'REMOVE_FIELDS':
			return produce( state, ( draft ) => {
				const { fieldIds } = action.payload;

				fieldIds.forEach( ( fieldId ) => {
					delete draft[ fieldId ];
				} );
			} );

		case 'RECEIVE_SIDEBAR':
			return produce( state, ( draft ) => {
				forEach( draft, ( field ) => {
					if ( field.type === 'sidebar' ) {
						field.options.unshift( action.payload );
					}
				} );
			} );

		default:
			return state;
	}
}

export default combineReducers( {
	containers,
	fields
} );
