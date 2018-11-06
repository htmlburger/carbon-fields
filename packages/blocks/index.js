/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { get, kebabCase } from 'lodash';
import { dispatch } from '@wordpress/data';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies.
 */
import './fields';
import './store';
import BlockEdit from './components/block-edit';
import BlockSave from './components/block-save';
import transformFieldsToAttributes from './utils/transform-fields-to-attributes';

/**
 * Register the blocks.
 */
const definitions = {};

get( window.cf, 'preloaded.blocks', [] ).forEach( ( container ) => {
	const name = kebabCase( container.id ).replace( 'carbon-fields-container-', '' );
	const attributes = transformFieldsToAttributes( container );

	const getBlockSetting = ( key, def = null ) => get( container, `settings.block_${ key }`, def );

	let containerFields = [ ...container.fields ];

	containerFields = containerFields.map( ( field ) => {
		return {
			...field,
			...{
				container_id: container.id
			}
		};
	} );

	definitions[ name ] = containerFields;

	registerBlockType( `carbon-fields/${ name }`, {
		id: container.id,
		icon: getBlockSetting( 'icon' ),
		category: getBlockSetting( 'category_slug', 'common' ),
		keywords: getBlockSetting( 'keywords', [] ),
		description: getBlockSetting( 'description', '' ),
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
dispatch( 'carbon-fields/blocks' ).setupFieldDefinitions( definitions );
