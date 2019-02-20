/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/editor';

class BlockSave extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<InnerBlocks.Content />
		);
	}
}

export default BlockSave;
