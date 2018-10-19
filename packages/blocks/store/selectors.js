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
