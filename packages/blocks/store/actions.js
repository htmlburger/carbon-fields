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
 * @param  {Object} sidebar
 * @return {Object}
 */
export function fetchAssociationOptions() {
	return {
		type: 'FETCH_ASSOCIATION_OPTIONS',
		payload: {}
	};
}
