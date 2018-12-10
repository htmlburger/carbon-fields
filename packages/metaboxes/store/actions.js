/**
 * Returns an action object used to setup the state when first opening an editor.
 *
 * @param  {Object[]} containers
 * @param  {Object}   fields
 * @return {Object}
 */
export function setupState( containers, fields ) {
	return {
		type: 'SETUP_STATE',
		payload: {
			containers,
			fields
		}
	};
}

/**
 * Returns an action object used to update the state.
 *
 * @param  {Object[]} containers
 * @param  {Object}   fields
 * @return {Object}
 */
export function updateState( containers, fields ) {
	return {
		type: 'UPDATE_STATE',
		payload: {
			containers,
			fields
		}
	};
}

/**
 * Returns an action object used to update the field's value.
 *
 * @param  {string} fieldId
 * @param  {mixed}  value
 * @return {Object}
 */
export function updateFieldValue( fieldId, value ) {
	return {
		type: 'UPDATE_FIELD_VALUE',
		payload: {
			fieldId,
			value
		}
	};
}

/**
 * Returns an action object used to add the fields.
 *
 * @param  {Object[]} fields
 * @return {Object}
 */
export function addFields( fields ) {
	return {
		type: 'ADD_FIELDS',
		payload: {
			fields
		}
	};
}

/**
 * Returns an action object used to clone the fields.
 *
 * @param  {string[]} originFieldIds
 * @param  {string[]} cloneFieldIds
 * @return {Object}
 */
export function cloneFields( originFieldIds, cloneFieldIds ) {
	return {
		type: 'CLONE_FIELDS',
		payload: {
			originFieldIds,
			cloneFieldIds
		}
	};
}

/**
 * Returns an action object used to remove the fields.
 *
 * @param  {string[]} fieldIds
 * @return {Object}
 */
export function removeFields( fieldIds ) {
	return {
		type: 'REMOVE_FIELDS',
		payload: {
			fieldIds
		}
	};
}

/**
 * Returns an action object used to add a container to all containers.
 *
 * @param  {Object} container
 * @return {Object}
 */
export function addContainer( container ) {
	return {
		type: 'ADD_CONTAINER',
		payload: container
	};
}

/**
 * Returns an action object used to remove a container from all containers.
 *
 * @param  {Object} container
 * @return {Object}
 */
export function removeContainer( container ) {
	return {
		type: 'REMOVE_CONTAINER',
		payload: container
	};
}

/**
 * Returns an action object used to add the created sidebar to all fields.
 *
 * @param  {Object} sidebar
 * @return {Object}
 */
export function receiveSidebar( sidebar ) {
	return {
		type: 'RECEIVE_SIDEBAR',
		payload: sidebar
	};
}

/**
 * Returns an action object used to signal that saving is locked.
 *
 * @param  {string} lockName
 * @return {Object}
 */
export function lockSaving( lockName ) {
	return {
		type: 'LOCK_SAVING',
		payload: {
			lockName
		}
	};
}

/**
 * Returns an action object used to signal that saving is unlocked.
 *
 * @param  {string} lockName
 * @return {Object}
 */
export function unlockSaving( lockName ) {
	return {
		type: 'UNLOCK_SAVING',
		payload: {
			lockName
		}
	};
}
