/**
 * Get the definitions by a given block name.
 *
 * @param  {Object} state
 * @param  {string} blockName
 * @return {Object[]}
 */
export function getFieldDefinitionsByBlockName( state, blockName ) {
	return state.fieldDefinitionsByBlockName[
		blockName.replace( 'carbon-fields/', '' )
	] || [];
}

/**
 * Returns the validation error.
 *
 * @param  {Object} state
 * @param  {string} fieldId
 * @return {string|null}
 */
export function getValidationErrorByFieldId( state, fieldId ) {
	return state.validationErrorsByFieldId[ fieldId ] || null;
}
