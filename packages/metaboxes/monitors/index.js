/**
 * External dependencies.
 */
import { Fragment, render } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import SaveLock from './save-lock';
import ConditionalDisplay from './conditional-display';
import WidgetHandler from './widget-handler';
import RevisionsFlag from './revisions-flag';
import isGutenberg from '../utils/is-gutenberg';
import { PAGE_NOW_WIDGETS, PAGE_NOW_CUSTOMIZE } from '../lib/constants';

/**
 * Initializes the monitors.
 *
 * @param  {string} context
 * @return {void}
 */
export default function initializeMonitors( context ) {
	const { pagenow } = window.cf.config;

	render(
		<Fragment>
			{ ! isGutenberg() && (
				<SaveLock />
			) }

			{ ( pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_CUSTOMIZE ) && (
				<WidgetHandler />
			) }

			<ConditionalDisplay context={ context } />
		</Fragment>,
		document.createElement( 'div' )
	);

	const postStuffNode = document.querySelector( '#poststuff' );

	if ( postStuffNode ) {
		render( <RevisionsFlag />, postStuffNode.appendChild( document.createElement( 'div' ) ) );
	}
}

