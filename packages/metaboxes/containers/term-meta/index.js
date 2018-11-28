/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { dispatch } from '@wordpress/data';
import { withEffects } from 'refract-callbag';
import {
	get,
	map,
	find,
	keyBy,
	filter
} from 'lodash';

/**
 * Internal dependencies.
 */
import fromAjaxEvent from '../../utils/from-ajax-event';
import { normalizePreloadedState } from '../../store/helpers';

/**
 * The function that controls the stream of side effects.
 *
 * @return {Function}
 */
function aperture() {
	return function() {
		return fromAjaxEvent( 'ajaxSuccess', 'add-tag' );
	};
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler( props ) {
	return function() {
		// Collects identifiers of current fields so we can remove them later.
		const oldFieldIds = map( props.container.fields, 'id' );

		// Get a fresh copy of the container and fields.
		const { containers, fields } = normalizePreloadedState( get( window.cf, 'preloaded.containers', [] ) );
		const container = find( containers, [ 'id', props.id ] );
		const containerFields = filter( fields, [ 'container_id', props.id ] );

		// Replace the container and add the new fields.
		const { updateState, removeFields } = dispatch( 'carbon-fields/metaboxes' );

		updateState(
			keyBy( [ container ], 'id' ),
			keyBy( containerFields, 'id' )
		);

		removeFields( oldFieldIds );
	};
}

addFilter( 'carbon-fields.term_meta.classic', 'carbon-fields/metaboxes', withEffects( handler )( aperture ) );
