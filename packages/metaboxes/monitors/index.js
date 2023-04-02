/**
 * External dependencies.
 */
import { Fragment, createRoot } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import SaveLock from './save-lock';
import ConditionalDisplay from './conditional-display';
import WidgetHandler from './widget-handler';
import NavMenuHandler from './nav-menu-handler';
import RevisionsFlag from './revisions-flag';
import isGutenberg from '../utils/is-gutenberg';
import { PAGE_NOW_WIDGETS, PAGE_NOW_CUSTOMIZE, PAGE_NOW_NAV } from '../lib/constants';

/**
 * Initializes the monitors.
 *
 * @param  {string} context
 * @return {void}
 */
export default function initializeMonitors( context ) {
	const { pagenow } = window.cf.config;

	createRoot(document.createElement( 'div' )).render(
		<Fragment>
			{ ! isGutenberg() && (
				<SaveLock />
			) }

			{ ( pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_CUSTOMIZE ) && (
				<WidgetHandler />
			) }

			{ ( pagenow === PAGE_NOW_NAV ) && (
				<NavMenuHandler />
			) }

			<ConditionalDisplay context={ context } />
		</Fragment>
	);

	const postStuffNode = document.querySelector( '#poststuff' );

	if ( postStuffNode ) {
		createRoot(postStuffNode.appendChild( document.createElement( 'div' ) )).render(<RevisionsFlag />);
	}
}

