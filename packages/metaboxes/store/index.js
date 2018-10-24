/**
 * External dependencies.
 */
import { registerStore, dispatch } from '@wordpress/data';
import {
	assign,
	get,
	keyBy
} from 'lodash';

/**
 * Internal dependencies.
 */
import flattenField from '../utils/flatten-field';
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

/**
 * Register the store.
 */
registerStore( 'carbon-fields/metaboxes', {
	reducer,
	actions,
	selectors
} );

/**
 * Hydrate the store's state.
 */
const fields = [];
const containers = get( window.cf, 'preloaded.containers', [] ).map( ( container ) => {
	return assign( {}, container, {
		fields: container.fields.map( ( field ) => flattenField( field, container.id, fields ) )
	} );
} );

dispatch( 'carbon-fields/metaboxes' ).setupState(
	keyBy( containers, 'id' ),
	keyBy( fields, 'id' )
);
