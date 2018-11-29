/**
 * External dependencies.
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { withEffects } from 'refract-callbag';
import { isEmpty } from 'lodash';

/**
 * Creates a high-order components which adds ability to evalute
 * the conditional logic of fields.
 *
 * @param  {Function} input
 * @param  {Function} output
 * @return {Function}
 */
export default function withConditionalLogic( input, output ) {
	/**
	 * The function that controls the stream of side-effects.
	 *
	 * @param  {Object} props
	 * @return {Function}
	 */
	function aperture( props ) {
		return function( component ) {
			if ( isEmpty( props.field.conditional_logic ) ) {
				return;
			}

			return input( props, component );
		};
	}

	/**
	 * The function that causes the side effects.
	 *
	 * @param  {Object} props
	 * @return {Function}
	 */
	function handler( props ) {
		return function( effect ) {
			output( props, effect );
		};
	}

	return createHigherOrderComponent( ( OriginalComponent ) => {
		return withEffects( handler )( aperture )( OriginalComponent );
	}, 'withConditionalLogic' );
}
