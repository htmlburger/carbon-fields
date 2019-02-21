/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/editor';

class BlockSave extends Component {
	/**
	 * Render the component.
	 *
	 * @return {null}
	 */
	render() {
		return null;
	}
}

/**
 * Adds the content of inner blocks to the saved content.
 *
 * @param  {mixed} element
 * @param  {Object} blockType
 * @return {mixed}
 */
function addInnerBlocksContent( element, blockType ) {
	if ( ! /^carbon\-fields\/.+$/.test( blockType.name ) ) {
		return element;
	}

	if ( ! blockType.supports.innerBlocks ) {
		return element;
	}

	return (
		<InnerBlocks.Content />
	);
}

wp.hooks.addFilter( 'blocks.getSaveElement', 'carbon-fields/blocks', addInnerBlocksContent );

export default BlockSave;
