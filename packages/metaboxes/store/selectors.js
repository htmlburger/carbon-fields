/**
 * External dependencies.
 */
import {
	filter,
	pick,
	mapValues,
	mapKeys
} from 'lodash';

/**
 * Returns the containers.
 *
 * @param  {Object} state
 * @return {Object[]}
 */
export function getContainers( state ) {
	return state.containers;
}

/**
 * Returns a container by an id.
 *
 * @param  {Object} state
 * @param  {string} containerId
 * @return {?Object}
 */
export function getContainerById( state, containerId ) {
	return state.containers[ containerId ];
}

/**
 * Returns the fields.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function getFields( state ) {
	return state.fields;
}

/**
 * Returns the fields that belong to the specified container.
 *
 * @param  {Object} state
 * @param  {string} containerId
 * @return {Object[]}
 */
export function getFieldsByContainerId( state, containerId ) {
	return filter( state.fields, [ 'container_id', containerId ] );
}

/**
 * Returns a field by an id.
 *
 * @param  {Object} state
 * @param  {string} fieldId
 * @return {?Object}
 */
export function getFieldById( state, fieldId ) {
	return state.fields[ fieldId ];
}

/**
 * Returns whether saving is locked.
 *
 * @param  {Object} state
 * @return {boolean}
 */
export function isSavingLocked( state ) {
	return Object.keys( state.savingLock ).length > 0;
}

/**
 * Returns whether the metaboxes fields contain unsaved changed.
 *
 * @param  {Object} state
 * @return {boolean}
 */
export function isDirty( state ) {
	return state.isDirty;
}

/**
 * Returns whether the metaboxes fields contain unsaved changed.
 *
 * @param  {Object} state
 * @return {boolean}
 */
export function isFieldUpdated( state ) {
	return state.isFieldUpdated;
}

/**
 * Returns a map of field values for a given group.
 *
 * @param  {Object}   state
 * @param  {string[]} fieldIds
 * @return {Object}
 */
export function getComplexGroupValues( state, fieldIds ) {
	let fields = pick( getFields( state ), fieldIds );

	fields = mapKeys( fields, ( field ) => field.base_name.replace( /\-/g, '_' ) );
	fields = mapValues( fields, ( field ) => field.value );

	return fields;
}
