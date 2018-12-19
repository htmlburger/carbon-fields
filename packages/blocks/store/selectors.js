/**
 * Get the container by a given block name.
 *
 * @param  {Object} state
 * @param  {string} blockName
 * @return {Object}
 */
export function getContainerDefinitionByBlockName( state, blockName ) {
	return state.containerDefinitionsByBlockName[
		blockName.replace( 'carbon-fields/', '' )
	] || {};
}

/**
 * Get the fields by a given block name.
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
