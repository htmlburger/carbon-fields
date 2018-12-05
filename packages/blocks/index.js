/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { get, kebabCase } from 'lodash';
import { dispatch } from '@wordpress/data';
import { registerBlockType } from '@wordpress/blocks';
import { setLocaleData } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './fields';
import './store';
import BlockEdit from './components/block-edit';
import BlockSave from './components/block-save';
import transformFieldsToAttributes from './utils/transform-fields-to-attributes';

/**
 * Sets the locale data for the package type
 */
setLocaleData( window.cf.config.locale, 'carbon-fields-ui' );

/**
 * Register the blocks.
 */
const definitions = {};

get( window.cf, 'preloaded.blocks', [] ).forEach( ( container ) => {
	const name = kebabCase( container.id ).replace( 'carbon-fields-container-', '' );
	const fields = transformFieldsToAttributes( container.fields );

	const getBlockSetting = ( key, def = null ) => get( container, `settings.${ key }`, def );

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
		title: container.title,
		icon: getBlockSetting( 'icon' ),
		category: getBlockSetting( 'category.slug' ),
		keywords: getBlockSetting( 'keywords', [] ),
		description: getBlockSetting( 'description', '' ),
		attributes: {
			data: fields
		},
		supports: {
			alignWide: false,
			anchor: false,
			html: false
		},
		edit: BlockEdit,
		save: BlockSave
	} );
} );

/**
 * Load the definitions in store.
 */
dispatch( 'carbon-fields/blocks' ).setupFieldDefinitions( definitions );
