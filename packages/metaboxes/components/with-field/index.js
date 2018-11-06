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
	const applyWithSelect = withSelect( ( select, props ) => {
		const field = select( 'carbon-fields/metaboxes' ).getFieldById( props.id );
		const name = props.name || field.name;
		const { value } = field;

		return {
			field,
			name,
			value
		};
	} );

	const applyWithDispatch = withDispatch( ( dispatch ) => {
		const { updateFieldValue } = dispatch( 'carbon-fields/metaboxes' );

		return {
			onChange: updateFieldValue
		};
	} );

	return compose( applyWithSelect, applyWithDispatch )( Component );
}, 'withField' );
