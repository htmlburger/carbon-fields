/**
 * External dependencies.
 */
import _ from 'lodash';
import { addFilter } from '@wordpress/hooks';
import { dispatch } from '@wordpress/data';
import { withEffects } from 'refract-callbag';
import { pipe, filter } from 'callbag-basics';

/**
 * Internal dependencies.
 */
import fromAjaxEvent from '../../utils/from-ajax-event';
import { normalizePreloadedState } from '../../store/helpers';
import './style.scss';

/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */
function aperture() {
	return pipe(
		fromAjaxEvent( 'ajaxSuccess', 'add-tag' ),
		filter( ( { settings, data } ) => {
			return settings.data.indexOf( 'carbon_fields_container' ) > -1 && ! data.documentElement.querySelector( 'wp_error' );
		} )
	);
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
		const oldFieldIds = _.map( props.container.fields, 'id' );

		// Get a fresh copy of the container and fields.
		const { containers, fields } = normalizePreloadedState( _.get( window.cf, 'preloaded.containers', [] ) );
		const container = _.find( containers, [ 'id', props.id ] );
		const containerFields = _.filter( fields, [ 'container_id', props.id ] );

		// Replace the container and add the new fields.
		const { updateState, removeFields } = dispatch( 'carbon-fields/metaboxes' );

		updateState(
			_.keyBy( [ container ], 'id' ),
			_.keyBy( containerFields, 'id' )
		);

		removeFields( oldFieldIds );
	};
}

addFilter( 'carbon-fields.term_meta.classic', 'carbon-fields/metaboxes', withEffects( aperture, { handler } ) );
