/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

/**
 * Carbon Fields dependencies.
 */
import { withFilters } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import withContainer from '../hocs/with-container';
import Container from '../components/container';
import { registerContainerType } from './registry';
import './term-meta';

/**
 * Extends the containers with necessary hooks.
 */
addFilter( 'carbon-fields.register-container-type', 'carbon-fields/metaboxes', ( type, context, component ) => {
	return compose(
		withContainer,
		withFilters( `carbon-fields.${ type }.${ context }` )
	)( component );
} );

/**
 * Registers the containers.
 */
[
	'post_meta',
	'term_meta',
	'user_meta',
	'comment_meta',
	'network',
	'theme_options',
	'nav_menu_item',
	'widget'
].forEach( ( type ) => registerContainerType( type, Container ) );
