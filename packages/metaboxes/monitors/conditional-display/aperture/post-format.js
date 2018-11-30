/**
 * External dependencies.
 */
import of from 'callbag-of';
import startWith from 'callbag-start-with';
import fromDelegatedEvent from 'callbag-from-delegated-event';
import distinctUntilChanged from 'callbag-distinct-until-changed';
import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';
import {
	pipe,
	map,
	filter
} from 'callbag-basics';

/**
 * Carbon Fields dependencies.
 */
import { fromSelector } from '@carbon-fields/core';

/**
 * The default state.
 *
 * @type {Object}
 */
const INITIAL_STATE = {
	post_format: 'standard'
};

/**
 * Extracts `post_format` from the input.
 *
 * @param  {Object} input
 * @return {Object}
 */
function getPostFormatFromRadioInput( input ) {
	let value = input.value;

	// Normalize the value of "Standard" input.
	if ( value === '0' ) {
		value = 'standard';
	}

	return {
		post_format: value
	};
}

/**
 * Defines the side effects for Classic Editor.
 */
addFilter( 'carbon-fields.conditional-display-post-format.classic', 'carbon-fields/metaboxes', () => {
	const node = document.querySelector( 'div#post-formats-select' );

	if ( ! node ) {
		return of( INITIAL_STATE );
	}

	return pipe(
		fromDelegatedEvent( node, 'input.post-format', 'change' ),
		map( ( { target } ) => getPostFormatFromRadioInput( target ) ),
		startWith( getPostFormatFromRadioInput( node.querySelector( 'input.post-format:checked' ) ) )
	);
} );

/**
 * Defines the side effects for Gutenberg.
 */
addFilter( 'carbon-fields.conditional-display-post-format.gutenberg', 'carbon-fields/metaboxes', ( ) => {
	return pipe(
		fromSelector( select( 'core/editor' ).getEditedPostAttribute, 'format' ),
		distinctUntilChanged(),
		filter( Boolean ),
		map( ( postFormat ) => ( {
			post_format: postFormat
		} ) ),
		startWith( INITIAL_STATE )
	);
} );
