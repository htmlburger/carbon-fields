/**
 * External dependencies.
 */
import { get, kebabCase } from 'lodash';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies.
 */
import BlockEdit from '@gutenberg/components/block-edit';
import BlockSave from '@gutenberg/components/block-save';
import transformFieldsToAttributes from '@gutenberg/utils/transform-fields-to-attributes';

/**
 * Register the blocks.
 */
get(window.cf, 'preloaded.blocks', []).forEach((container) => {
	const name = kebabCase(container.id).replace('carbon-fields-container-', '');
	const attributes = transformFieldsToAttributes(container);

	registerBlockType(`carbon-fields/${name}`, {
		category: 'common',
		title: container.title,
		edit: BlockEdit,
		save: BlockSave,
		attributes,
		supports: {
			layout: false,
			alignWide: false,
			anchor: false,
			html: false
		}
	});
});
