/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import ContainerBase from '../../components/container-base';
import withContainer from '../../components/with-container';

addFilter( 'carbon-fields.widget-container.classic', 'carbon-fields/metaboxes', ( OriginalWidgetContainer ) => withContainer( ( props ) => <OriginalWidgetContainer { ...props } /> ) );

export default ContainerBase;
