/**
 * External dependencies.
 */
import produce from 'immer';
import { combineReducers } from '@wordpress/data';
import {
	set,
	omit,
	keyBy,
	assign,
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
 * @param  {string}   originId
 * @param  {string}   cloneId
 * @param  {Object}   fields
 * @param  {Object[]} accumulator
 * @return {Object[]}
 */
function cloneField( originId, cloneId, fields, accumulator ) {
	const field = cloneDeep( fields[ originId ] );

	field.id = cloneId;

	if ( field.type === 'complex' ) {
		field.value.forEach( ( group ) => {
			group.id = uniqueId( 'carbon-fields-' );

			accumulator = group.fields.reduce( ( groupAccumulator, groupField ) => {
				const originGroupFieldId = groupField.id;
				const cloneGroupFieldId = uniqueId( 'carbon-fields-' );

				groupField.id = cloneGroupFieldId;

				return cloneField( originGroupFieldId, cloneGroupFieldId, fields, groupAccumulator );
			}, accumulator );
		} );
	}

	return accumulator.concat( field );
}

/**
 * Returns a list of field ids by a given root id.
 *
 * @param  {string}   fieldId
 * @param  {Object}   fields
 * @param  {string[]} accumulator
 * @return {string[]}
 */
function getFieldIdsByRootId( fieldId, fields, accumulator ) {
	const field = fields[ fieldId ];

	if ( field.type === 'complex' ) {
		field.value.forEach( ( group ) => {
			accumulator = group.fields.reduce( ( groupAccumulator, groupField ) => {
				return getFieldIdsByRootId( groupField.id, fields, groupAccumulator );
			}, accumulator );
		} );
	}

	return accumulator.concat( fieldId );
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

				const clonedFields = originFieldIds.reduce( ( accumulator, originFieldId, index ) => {
					return cloneField( originFieldId, cloneFieldIds[ index ], draft, accumulator );
				}, [] );

				assign( draft, keyBy( clonedFields, 'id' ) );
			} );

		case 'REMOVE_FIELDS':
			const fieldIds = action.payload.fieldIds.reduce( ( accumulator, fieldId ) => {
				return getFieldIdsByRootId( fieldId, state, accumulator );
			}, [] );

			return omit( state, fieldIds );

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
