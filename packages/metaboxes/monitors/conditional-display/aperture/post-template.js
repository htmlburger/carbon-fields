/**
 * External dependencies.
 */
import of from 'callbag-of';
import startWith from 'callbag-start-with';
import distinctUntilChanged from 'callbag-distinct-until-changed';
import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';
import { isString } from 'lodash';
import {
	pipe,
	map,
	filter,
	fromEvent
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
	post_template: ''
};

/**
 * Extracts `post_template` from the select.
 *
 * @param  {Object} node
 * @return {Object}
 */
function getPostTemplateFromSelect( node ) {
	let { value } = node;

	// In Gutenberg for the "Default" template is used an empty string.
	if ( value === 'default' ) {
		value = '';
	}

	return {
		post_template: value
	};
}

/**
 * Defines the side effects for Classic Editor.
 */
addFilter( 'carbon-fields.conditional-display-post-template.classic', 'carbon-fields/metaboxes', () => {
	const node = document.querySelector( 'select#page_template' );

	if ( ! node ) {
		return of( INITIAL_STATE );
	}

	return pipe(
		fromEvent( node, 'change' ),
		map( ( { target } ) => getPostTemplateFromSelect( target ) ),
		startWith( getPostTemplateFromSelect( node ) )
	);
} );

/**
 * Defines the side effects for Gutenberg.
 */
addFilter( 'carbon-fields.conditional-display-post-template.gutenberg', 'carbon-fields/metaboxes', () => {
	return pipe(
		fromSelector( select( 'core/editor' ).getEditedPostAttribute, 'template' ),
		distinctUntilChanged(),
		filter( isString ),
		map( ( postTemplate ) => ( {
			post_template: postTemplate
		} ) ),
		startWith( INITIAL_STATE )
	);
} );
