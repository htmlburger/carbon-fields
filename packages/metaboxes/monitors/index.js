/**
 * External dependencies.
 */
import { Fragment, render, createRoot } from '@wordpress/element';

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

	const MonitorElement = document.createElement( 'div' );
	const MonitorComponent = <Fragment>
		{ ! isGutenberg() && (
			<SaveLock />
		) }

		{ ( pagenow === PAGE_NOW_WIDGETS || pagenow === PAGE_NOW_CUSTOMIZE ) && (
			<WidgetHandler />
		) }

		<ConditionalDisplay context={ context } />
	</Fragment>;

	if ( createRoot ) {
		createRoot( MonitorElement ).render( MonitorComponent );
	} else {
		render(
			MonitorComponent,
			MonitorElement,
		);
	}

	const postStuffNode = document.querySelector( '#poststuff' );

	if ( postStuffNode ) {
		const postStuffElement = document.createElement( 'div' );
		const postStuffComponenet = <RevisionsFlag />;

		const postStuffChildElement = postStuffNode.appendChild( postStuffElement );

		if ( createRoot ) {
			createRoot( postStuffChildElement ).render( postStuffComponenet );
		} else {
			render( postStuffComponenet, postStuffChildElement );
		}
	}
}