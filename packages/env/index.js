/**
 * External dependencies.
 */
import _ from 'lodash';

/**
 * Prevent the conflicts with WordPress's Underscore lib.
 */
if ( ! window.lodash ) {
	window.lodash = _.noConflict();
}

/**
 * Setup the enviroment variables used by Carbon Fields.
 */
window.cf = window.cf || {};
window.cf.element = window.wp.element;
