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
		const field = select( 'carbon-fields/core' ).getFieldById( id );

		return {
			field
		};
	} );

	const applyWithDispatch = withDispatch( ( dispatch ) => {
		const { updateFieldValue } = dispatch( 'carbon-fields/core' );

		return {
			onChange: updateFieldValue
		};
	} );

	return compose( applyWithSelect, applyWithDispatch )( Component );
}, 'withStore' );
