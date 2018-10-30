/**
 * External dependencies.
 */
import { withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withEffects } from 'refract-callbag';

/**
 * Internal dependencies.
 */
import withContainer from '../../components/with-container';
import handler from './handler';

/**
 * The function that controls the stream of side-effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function aperture() {
	return function() {

	};
}

const applyWithSelect = withSelect( ( select ) => {
	const postParentId = select( 'core/editor' ).getEditedPostAttribute( 'parent' );

	return {
		postParentId
	};
} );

const applyWithEffects = withEffects( aperture )( handler );

addFilter( 'carbon-fields.post_meta-container.gutenberg', 'carbon-fields/metaboxes', ( OriginalPostMetaContainer ) => compose(
	withContainer,
	applyWithSelect,
	applyWithEffects
)( ( props ) => <OriginalPostMetaContainer { ...props } /> ) );
