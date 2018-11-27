/**
 * External dependencies.
 */
import { withSelect, withDispatch } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';

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

	const applyWithDispatch = withDispatch( ( dispatch ) => {
		const { updateContainerMeta } = dispatch( 'carbon-fields/metaboxes' );

		return {
			updateContainerMeta
		};
	} );

	return compose( applyWithSelect, applyWithDispatch )( Component );
}, 'withContainer' );
