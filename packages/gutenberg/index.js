/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */
import { get, kebabCase } from 'lodash';
import { render } from '@wordpress/element';
import { registerStore, dispatch } from '@wordpress/data';
import { registerBlockType } from '@wordpress/blocks';
import { getContainerType } from '@carbon-fields/core';

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

	const getContainerData = ( key, def = null ) => get( container, `settings.block_${ key }`, def );

	definitions[ name ] = container.fields;

	registerBlockType( `carbon-fields/${ name }`, {
		description: getContainerData( 'description', '' ),
		category: getContainerData( 'category_slug', 'common' ),
		icon: getContainerData( 'icon' ),
		keywords: getContainerData( 'keywords', [] ),
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

/**
 * Abracadabra! Poof! Containers everywhere ...
 */
get( window.cf, 'preloaded.containers', [] ).forEach( ( container ) => {
	const Component = getContainerType( container.type, 'gutenberg' );
	const node = document.querySelector( `.container-${ container.id }` );

	if ( node ) {
		render(
			<Component container={ container } />,
			node
		);
	} else {
		console.error( `Could not find DOM element for container "${ container.id }".` );
	}
} );
