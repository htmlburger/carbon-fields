/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { dispatch } from '@wordpress/data';
import { withEffects } from 'refract-callbag';
import { map, pipe } from 'callbag-basics';
import { get, keyBy } from 'lodash';

/**
 * Internal dependencies.
 */
import ContainerBase from '../../components/container-base';
import withContainer from '../../components/with-container';
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

addFilter( 'carbon-fields.term_meta-container.classic', 'carbon-fields/metaboxes', ( OriginalTermMetaContainer ) => {
	const container = withContainer( ( props ) => <OriginalTermMetaContainer { ...props } /> );
	const applyWithEffects = withEffects( handler )( aperture );

	return compose(
		applyWithEffects
	)( container );
} );

export default ContainerBase;
