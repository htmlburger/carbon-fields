/**
 * External dependencies.
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import ConditionalDisplay from './main';

/**
 * Initializes the conditional display.
 *
 * @param  {string} context
 * @return {void}
 */
export default function initializeConditionalDisplay( context ) {
	render(
		<ConditionalDisplay context={ context } />,
		document.createElement( 'div' )
	);
}
