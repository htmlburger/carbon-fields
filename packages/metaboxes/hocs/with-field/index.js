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
		const compact = window.cf.config.compactInput;
		const field = select( 'carbon-fields/metaboxes' ).getFieldById( props.id );
		const { value } = field;

		let name = props.name || field.name;

		/**
		 * Wrap top-level field names in compact input key
		 */
		if ( compact && name.indexOf( '[' ) === -1 ) {
			name = `${ window.cf.config.compactInputKey }[${ name }]`;
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
