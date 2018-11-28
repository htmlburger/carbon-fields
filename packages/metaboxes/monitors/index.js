/**
 * External dependencies.
 */
import { Fragment, render } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import SaveLock from './save-lock';
import isGutenberg from '../utils/is-gutenberg';

/**
 * Initializes the monitors.
 *
 * @return {void}
 */
export default function initializeMonitors() {
	render(
		<Fragment>
			{ ! isGutenberg() && (
				<SaveLock />
			) }
		</Fragment>,
		document.createElement( 'div' )
	);
}

