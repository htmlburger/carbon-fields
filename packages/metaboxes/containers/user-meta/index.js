/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import ContainerBase from '../../components/container-base';
import withContainer from '../../components/with-container';

addFilter( 'carbon-fields.user_meta-container.classic', 'carbon-fields/metaboxes', ( OriginalUserMetaContainer ) => withContainer( ( props ) => <OriginalUserMetaContainer { ...props } /> ) );

export default ContainerBase;
