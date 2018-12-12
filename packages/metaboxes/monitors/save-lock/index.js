/**
 * External dependencies.
 */
import { withEffects } from 'refract-callbag';
import { select } from '@wordpress/data';

/**
 * Carbon Fields dependencies.
 */
import { fromSelector } from '@carbon-fields/core';

/**
 * Toggles the ability to save the page.
 *
 * @return {null}
 */
function SaveLock() {
	return null;
}

/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */
function aperture() {
	return fromSelector( select( 'carbon-fields/metaboxes' ).isSavingLocked );
}

/**
 * The function that causes the side effects.
 *
 * @return {Function}
 */
function handler() {
	return function( isLocked ) {
		const nodes = document.querySelectorAll( `
			#publishing-action input#publish,
			#publishing-action input#save,
			#addtag input#submit,
			#edittag input[type="submit"],
			#your-profile input#submit
		` );

		nodes.forEach( ( node ) => {
			node.disabled = isLocked;
		} );
	};
}

export default withEffects( aperture, { handler } )( SaveLock );
