/**
 * External dependencies.
 */
import { setLocaleData } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './store';
import './fields';
import initializeMonitors from './monitors';
import initializeContainers from './containers';
import isGutenberg from './utils/is-gutenberg';

/**
 * Sets the locale data for the package type
 */
setLocaleData( window.cf.config.locale, 'carbon-fields-ui' );

/**
 * Determines the rendering context.
 *
 * @type {string}
 */
const context = isGutenberg() ? 'gutenberg' : 'classic';

/**
 * Abracadabra! Poof! Containers everywhere ...
 */
initializeContainers( context );
initializeMonitors( context );
