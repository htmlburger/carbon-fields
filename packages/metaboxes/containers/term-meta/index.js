/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { dispatch } from '@wordpress/data';
import { withEffects } from 'refract-callbag';
import { map, pipe } from 'callbag-basics';
import { get, keyBy } from 'lodash';

/**
 * Internal dependencies.
 */
import fromAjaxEvent from '../../utils/from-ajax-event';
import { normalizePreloadedState } from '../../store/helpers';

function aperture() {
	return function() {
		return pipe(
			fromAjaxEvent( 'ajaxSuccess', 'add-tag' ),
			map( ( { settings, data } ) => ( { settings, data } ) ),
			map( ( payload ) => ( {
				type: 'RESET',
				payload: payload
			} ) )
		);
	};
}

function handler() {
	return function( effect ) {
		switch ( effect.type ) {
			case 'RESET':
				const { containers, fields } = normalizePreloadedState( get( window.cf, 'preloaded.containers', [] ) );

				dispatch( 'carbon-fields/metaboxes' ).setupState(
					keyBy( containers, 'id' ),
					keyBy( fields, 'id' )
				);

				break;
		}
	};
}

addFilter( 'carbon-fields.term_meta.classic', 'carbon-fields/metaboxes', withEffects( handler )( aperture ) );
