/**
 * Returns an action object used to setup the definitions state when first opening an editor.
 *
 * @param  {Object} definitions
 * @return {Object}
 */
export function setupFieldDefinitions( definitions ) {
	return {
		type: 'SETUP_FIELD_DEFINITIONS',
		payload: {
			definitions
		}
	};
}

/**
 * Returns an actions object used to request options for an association field.
 *
 * @return {Object}
 */
export function fetchAssociationOptions() {
	return {
		type: 'FETCH_ASSOCIATION_OPTIONS',
		payload: {}
	};
}

/**
 * Returns an actions object used to receive options for all association fields.
 *
 * @param  {Object} options
 * @return {Object}
 */
export function receiveAssociationOptions( options ) {
	return {
		type: 'RECEIVE_ASSOCIATION_OPTIONS',
		payload: options
	};
}
