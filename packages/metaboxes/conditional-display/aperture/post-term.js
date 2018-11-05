/**
 * External dependencies.
 */
import produce from 'immer';
import fromDelegatedEvent from 'callbag-from-delegated-event';
import {
	merge,
	pipe,
	scan,
	map,
	filter
} from 'callbag-basics';
import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';
import { pull, fromPairs } from 'lodash';

/**
 * Internal dependencies.
 */
import fromSelector from '../utils/from-selector';

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
			} )
		);
	} );
}

/**
 * Defines the side effects for Classic Editor.
 */
addFilter( 'carbon-fields.conditional-display-post-term.classic', 'carbon-fields/metaboxes', () => {
	return pipe(
		merge( ...trackHierarchicalTaxonomies() ),
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
