/**
 * External dependencies.
 */
import produce from 'immer';
import startWith from 'callbag-start-with';
import fromDelegatedEvent from 'callbag-from-delegated-event';
import {
	merge,
	pipe,
	scan,
	map,
	filter,
	fromEvent
} from 'callbag-basics';
import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';
import { pull, fromPairs } from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { fromSelector } from '@carbon-fields/core';

/**
 * Applies a monkey patch to the specified method of `window.tagBox` API
 * so we can detect changes of the non-hierarchical taxonomies.
 *
 * @param  {Object} tagBox
 * @param  {string} method
 * @return {void}
 */
function patchWordPressTagBoxAPI( tagBox, method ) {
	tagBox[ `original_${ method }` ] = tagBox[ method ];

	tagBox[ method ] = function( ...args ) {
		const event = new Event( 'change' );
		const textarea = window.jQuery( args[ 0 ] )
			.closest( '.postbox' )
			.find( 'textarea.the-tags' )
			.get( 0 );

		const result = tagBox[ `original_${ method }` ]( ...args );

		textarea.dispatchEvent( event );

		return result;
	};
}

if ( window.tagBox ) {
	patchWordPressTagBoxAPI( window.tagBox, 'parseTags' );
	patchWordPressTagBoxAPI( window.tagBox, 'flushTags' );
}

/**
 * Extracts the terms of a hierarchical taxonomy.
 *
 * @param  {string} taxonomy
 * @return {Object}
 */
function getTermsFromChecklist( taxonomy ) {
	const inputs = document.querySelectorAll( `#${ taxonomy }checklist input[type="checkbox"]:checked` );

	return [ ...inputs ].reduce( ( memo, input ) => {
		const value = parseInt( input.value, 10 );

		memo[ taxonomy ].push( value );

		return memo;
	}, {
		[ taxonomy ]: []
	} );
}

/**
 * Extracts the terms of a non-hierarchical taxonomy.
 *
 * @param  {string} taxonomy
 * @return {Object}
 */
function getTermsFromText( taxonomy ) {
	const node = document.querySelector( `#tagsdiv-${ taxonomy } textarea.the-tags` );
	const terms = node.value
		? node.value.split( window.tagsSuggestL10n.tagDelimiter )
		: [];

	return {
		[ taxonomy ]: terms
	};
}

/**
 * Keeps track of the hierarchical taxonomies like `categories`.
 *
 * @return {Function}
 */
function trackHierarchicalTaxonomies() {
	const nodes = document.querySelectorAll( 'div[id^="taxonomy-"]' );

	return [ ...nodes ].map( ( node ) => {
		const taxonomy = node.id.replace( 'taxonomy-', '' );

		return pipe(
			fromDelegatedEvent( node.querySelector( `#${ taxonomy }checklist` ), 'input[type="checkbox"]', 'change' ),
			scan( ( stack, { target } ) => {
				return produce( stack, ( draft ) => {
					const value = parseInt( target.value, 10 );

					if ( target.checked ) {
						draft[ taxonomy ].push( value );
					} else {
						pull( draft[ taxonomy ], value );
					}
				} );
			}, {
				[ taxonomy ]: []
			} ),
			startWith( getTermsFromChecklist( taxonomy ) )
		);
	} );
}

/**
 * Keeps track of the non-hierarchical taxonomies like `tags`.
 *
 * @return {Function}
 */
function trackNonHierarchicalTaxonomies() {
	const nodes = document.querySelectorAll( 'div[id^="tagsdiv-"]' );

	return [ ...nodes ].map( ( node ) => {
		const taxonomy = node.id.replace( 'tagsdiv-', '' );

		return pipe(
			fromEvent( node.querySelector( 'textarea.the-tags' ), 'change' ),
			map( ( { target } ) => ( {
				[ taxonomy ]: target.value
					? target.value.split( window.tagsSuggestL10n.tagDelimiter )
					: []
			} ) ),
			startWith( getTermsFromText( taxonomy ) )
		);
	} );
}

/**
 * Defines the side effects for Classic Editor.
 */
addFilter( 'carbon-fields.conditional-display-post-term.classic', 'carbon-fields/metaboxes', () => {
	return pipe(
		merge(
			...trackHierarchicalTaxonomies(),
			...trackNonHierarchicalTaxonomies()
		),
		scan( ( previous, current ) => {
			return {
				post_term: {
					...previous.post_term,
					...current
				}
			};
		}, {
			post_term: {}
		} )
	);
} );

/**
 * Defines the side effects for Gutenberg.
 */
addFilter( 'carbon-fields.conditional-display-post-term.gutenberg', 'carbon-fields/metaboxes', () => {
	const { getTaxonomies } = select( 'core' );
	const { getEditedPostAttribute } = select( 'core/editor' );

	// Borrowed from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/post-taxonomies/index.js
	return pipe(
		fromSelector( getTaxonomies, { per_page: -1 } ),
		filter( Boolean ),
		map( ( taxonomies ) => {
			const pairs = taxonomies.map( ( taxonomy ) => ( [
				taxonomy.slug,
				getEditedPostAttribute( taxonomy.rest_base ) || []
			] ) );

			return {
				post_term: fromPairs( pairs )
			};
		} )
	);
} );
