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

/**
 * Initializes the monitors.
 *
 * @param  {string} context
 * @return {void}
 */
export default function initializeMonitors( context ) {
	render(
		<Fragment>
			{ ! isGutenberg() && (
				<SaveLock />
			) }

			{ ! isGutenberg() && (
				<UnsavedChanges />
			) }

			<WidgetHandler />

			<ConditionalDisplay context={ context } />
		</Fragment>,
		document.createElement( 'div' )
	);
}

