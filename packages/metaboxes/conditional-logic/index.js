/**
 * External dependencies.
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import ConditionalLogic from './main';

/**
 * Initializes the conditional logic.
 *
 * @param  {string} context
 * @return {void}
 */
export default function initializeConditionalLogic( context ) {
	render(
		<ConditionalLogic context={ context } />,
		document.createElement( 'div' )
	);
}
