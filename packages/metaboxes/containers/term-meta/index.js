/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import ContainerBase from '../../components/container-base';
import withContainer from '../../components/with-container';

addFilter( 'carbon-fields.term_meta-container.classic', 'carbon-fields/metaboxes', ( OriginalTermMetaContainer ) => withContainer( ( props ) => <OriginalTermMetaContainer { ...props } /> ) );

export default ContainerBase;
