/**
 * External dependencies.
 */
import { select } from '@wordpress/data';
import { withEffects } from 'refract-callbag';

/**
 * Carbon Fields dependencies.
 */
import { fromSelector } from '@carbon-fields/core';

/**
 * Toggles the alert if the page has not been saved before reload.
 *
 * @return {null}
 */
function UnsavedChanges() {
	return null;
}

/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */
function aperture() {
	return fromSelector( select( 'carbon-fields/metaboxes' ).isDirty );
}

/**
 * The function that causes the side effects.
 *
 * @return {Function}
 */
function handler() {
	return function( isDirty ) {
		if ( ! isDirty ) {
			return;
		}

		// Support for custom message has been removed
		// Ref : https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload#Browser_compatibility
		window.onbeforeunload = ( e ) => e;
	};
}

export default withEffects( aperture, { handler } )( UnsavedChanges );
