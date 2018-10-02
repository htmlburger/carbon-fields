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

/**
 * Register the blocks.
 */
get(window.cf, 'preloaded.blocks', []).forEach((container) => {
	registerBlockType(`carbon-fields/${kebabCase(container.id)}`, {
		category: 'common',
		title: container.title,
		edit: BlockEdit,
		save: BlockSave
	});
});
