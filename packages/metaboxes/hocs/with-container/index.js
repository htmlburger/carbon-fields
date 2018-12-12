/**
 * External dependencies.
 */
import { withSelect } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Creates a high-order component which adds connection
 * to the store.
 *
 * @param  {Function} Component
 * @return {Function}
 */
export default createHigherOrderComponent( ( Component ) => {
	const applyWithSelect = withSelect( ( select, { id } ) => {
		const container = select( 'carbon-fields/metaboxes' ).getContainerById( id );

		return {
			container
		};
	} );

	return applyWithSelect( Component );
}, 'withContainer' );
