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
				type: 'RESET_CONTAINER',
				payload: payload
			} ) )
		);
	};
}

function handler( props ) {
	const { id } = props;

	return function( effect ) {
		switch ( effect.type ) {
			case 'RESET_CONTAINER':
				const { containers, fields } = normalizePreloadedState( get( window.cf, 'preloaded.containers', [] ) );

				const container = containers.find( ( c ) => c.id === id );
				const containerFields = fields.filter( ( field ) => container.fields.map( ( f ) => f.id ).indexOf( field.id ) !== -1 );

				dispatch( 'carbon-fields/metaboxes' ).updateState(
					keyBy( [ container ], 'id' ),
					keyBy( containerFields, 'id' )
				);

				break;
		}
	};
}

addFilter( 'carbon-fields.term_meta.classic', 'carbon-fields/metaboxes', withEffects( handler )( aperture ) );
