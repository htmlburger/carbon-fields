/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import ContainerBase from '../../components/container-base';
import withContainer from '../../components/with-container';

addFilter( 'carbon-fields.theme_options-container.classic', 'carbon-fields/metaboxes', ( OriginalThemeOptionsContainer ) => withContainer( ( props ) => <OriginalThemeOptionsContainer { ...props } /> ) );

export default ContainerBase;
