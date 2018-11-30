/**
 * External dependencies.
 */
import { registerStore, dispatch } from '@wordpress/data';
import {
	get,
	keyBy
} from 'lodash';

/**
 * Internal dependencies.
 */
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import { normalizePreloadedState } from './helpers';

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
const { containers, fields } = normalizePreloadedState( get( window.cf, 'preloaded.containers', [] ) );

dispatch( 'carbon-fields/metaboxes' ).setupState(
	keyBy( containers, 'id' ),
	keyBy( fields, 'id' )
);
