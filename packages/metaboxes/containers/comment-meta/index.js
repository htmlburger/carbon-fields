/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import ContainerBase from '../../components/container-base';
import withContainer from '../../components/with-container';

addFilter( 'carbon-fields.comment_meta-container.classic', 'carbon-fields/metaboxes', ( OriginalCommentMetaContainer ) => withContainer( ( props ) => <OriginalCommentMetaContainer { ...props } /> ) );

export default ContainerBase;
