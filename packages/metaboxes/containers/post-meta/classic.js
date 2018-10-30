/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withEffects } from 'refract-callbag';
import {
	map,
	pipe,
	merge,
	filter,
	fromEvent
} from 'callbag-basics';
import startWith from 'callbag-start-with';

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
	return function() {
		const $postParentSelectbox = document.querySelector( 'select#parent_id' );
		const postParentId$ = pipe(
			fromEvent( $postParentSelectbox, 'change' ),
			map( ( event ) => parseInt( event.target.value, 10 ) ),
			filter( ( postParentId ) => ! isNaN( postParentId ) ),
			map( ( postParentId ) => ( {
				type: POST_PARENT_ID,
				payload: postParentId
			} ) ),
			startWith( {
				type: POST_PARENT_ID,
				payload: $postParentSelectbox.value ? parseInt( $postParentSelectbox.value, 10 ) : 0
			} )
		);

		return merge( postParentId$ );
	};
}

const applyWithEffects = withEffects( handler )( aperture );

addFilter( 'carbon-fields.post_meta-container.classic', 'carbon-fields/metaboxes', ( OriginalPostMetaContainer ) => compose(
	withContainer,
	applyWithEffects
)( ( props ) => <OriginalPostMetaContainer { ...props } /> ) );
