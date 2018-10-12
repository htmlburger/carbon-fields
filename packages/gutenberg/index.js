/**
 * External dependencies.
 */
import { get, kebabCase } from 'lodash';
import { registerStore, dispatch } from '@wordpress/data';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies.
 */
import './fields';
import store from './store';
import BlockEdit from './components/block-edit';
import BlockSave from './components/block-save';
import transformFieldsToAttributes from './utils/transform-fields-to-attributes';

/**
 * Register the store.
 */
registerStore( 'carbon-fields', store );

/**
 * Register the blocks.
 */
const definitions = {};

get( window.cf, 'preloaded.blocks', [] ).forEach( ( container ) => {
	const name = kebabCase( container.id ).replace( 'carbon-fields-container-', '' );
	const attributes = transformFieldsToAttributes( container );

	definitions[ name ] = container.fields;

	registerBlockType( `carbon-fields/${ name }`, {
		category: 'common',
		title: container.title,
		edit: BlockEdit,
		save: BlockSave,
		attributes,
		supports: {
			alignWide: false,
			anchor: false,
			html: false
		}
	} );
} );

/**
 * Load the definitions in store.
 */
dispatch( 'carbon-fields' ).setupFieldDefinitions( definitions );
