/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import withContainer from '../../components/with-container';

addFilter( 'carbon-fields.post_meta-container.gutenberg', 'carbon-fields/metaboxes', ( OriginalPostMetaContainer ) => compose(
	withContainer
)( ( props ) => <OriginalPostMetaContainer { ...props } /> ) );
