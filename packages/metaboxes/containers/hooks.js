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

/**
 * Extends the containers with necessary hooks.
 */
addFilter( 'carbon-fields.register-container-type', 'carbon-fields/metaboxes', ( type, context, component ) => {
	return compose(
		withContainer,
		withFilters( `carbon-fields.${ type }.${ context }` )
	)( component );
} );
