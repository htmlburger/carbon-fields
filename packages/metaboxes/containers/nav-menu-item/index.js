/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import ContainerBase from '../../components/container-base';
import withContainer from '../../components/with-container';

addFilter( 'carbon-fields.nav_menu_item-container.classic', 'carbon-fields/metaboxes', ( OriginalNavMenuItemContainer ) => withContainer( ( props ) => <OriginalNavMenuItemContainer { ...props } /> ) );

export default ContainerBase;
