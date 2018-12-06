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
import UnsavedChanges from './unsaved-changes';
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

			{ ! isGutenberg() && (
				<UnsavedChanges />
			) }

			{ ( pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_CUSTOMIZE ) && (
				<WidgetHandler />
			) }

			<ConditionalDisplay context={ context } />
		</Fragment>,
		document.createElement( 'div' )
	);
}

