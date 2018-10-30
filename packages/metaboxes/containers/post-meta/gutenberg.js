/**
 * External dependencies.
 */
import { withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withEffects } from 'refract-callbag';
import {
	map,
	pipe,
	merge,
	filter
} from 'callbag-basics';

/**
 * Internal dependencies.
 */
import withContainer from '../../components/with-container';
import handler from './handler';
import { POST_PARENT_ID } from './constants';

/**
 * The function that controls the stream of side-effects.
 *
 * @return {Function}
 */
function aperture() {
	return function( component ) {
		const postParentId$ = pipe(
			component.observe( 'postParentId' ),
			map( ( postParentId ) => parseInt( postParentId, 10 ) ),
			filter( ( postParentId ) => ! isNaN( postParentId ) ),
			map( ( postParentId ) => ( {
				type: POST_PARENT_ID,
				payload: postParentId
			} ) )
		);

		return merge( postParentId$ );
	};
}

const applyWithSelect = withSelect( ( select ) => {
	const postParentId = select( 'core/editor' ).getEditedPostAttribute( 'parent' );

	return {
		postParentId
	};
} );

const applyWithEffects = withEffects( handler )( aperture );

addFilter( 'carbon-fields.post_meta-container.gutenberg', 'carbon-fields/metaboxes', ( OriginalPostMetaContainer ) => compose(
	withContainer,
	applyWithSelect,
	applyWithEffects
)( ( props ) => <OriginalPostMetaContainer { ...props } /> ) );
