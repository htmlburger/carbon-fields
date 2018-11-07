/**
 * External dependencies.
 */
import produce from 'immer';
import { combineReducers } from '@wordpress/data';
import {
	set,
	forEach,
	cloneDeep,
	uniqueId
} from 'lodash';

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
 * Clones a field.
 *
 * @param  {string} originId
 * @param  {string} cloneId
 * @param  {Object} fields
 * @return {void}
 */
function cloneField( originId, cloneId, fields ) {
	const field = cloneDeep( fields[ originId ] );

	field.id = cloneId;

	if ( field.type === 'complex' ) {
		field.value.forEach( ( group ) => {
			group.id = uniqueId( 'carbon-fields-' );

			group.fields.forEach( ( groupField ) => {
				const cloneGroupFieldId = uniqueId( 'carbon-fields-' );

				cloneField( groupField.id, cloneGroupFieldId, fields );

				groupField.id = cloneGroupFieldId;
			} );
		} );
	}

	fields[ cloneId ] = field;
}

/**
 * Deletes a field.
 *
 * @param  {string} fieldId
 * @param  {Object} fields
 * @return {void}
 */
function deleteField( fieldId, fields ) {
	const field = fields[ fieldId ];

	if ( field.type === 'complex' ) {
		field.value.forEach( ( group ) => {
			group.fields.forEach( ( groupField ) => {
				deleteField( groupField.id, fields );
			} );
		} );
	}

	delete fields[ fieldId ];
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

		case 'ADD_FIELDS':
			return produce( state, ( draft ) => {
				action.payload.fields.forEach( ( field ) => {
					draft[ field.id ] = field;
				} );
			} );

		case 'CLONE_FIELDS':
			return produce( state, ( draft ) => {
				const { originFieldIds, cloneFieldIds } = action.payload;

				originFieldIds.forEach( ( originFieldId, index ) => {
					cloneField( originFieldId, cloneFieldIds[ index ], draft );
				} );
			} );

		case 'REMOVE_FIELDS':
			return produce( state, ( draft ) => {
				const { fieldIds } = action.payload;

				fieldIds.forEach( ( fieldId ) => {
					deleteField( fieldId, draft );
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
