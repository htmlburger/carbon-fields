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
		const { compactInput, compactInputKey } = window.cf.config;
		const field = select( 'carbon-fields/metaboxes' ).getFieldById( props.id );
		const { value } = field;

		let name = props.name || field.name;

		/**
		 * Wrap top-level field names in compact input key.
		 */
		if ( compactInput && ! props.name ) {
			name = `${ compactInputKey }[${ name }]`;
		}

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
