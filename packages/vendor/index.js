/**
 * External dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import nanoid from 'nanoid';
import immer from 'immer';
import * as apiFetch from '@wordpress/api-fetch';
import * as compose from '@wordpress/compose';
import * as element from '@wordpress/element';
import * as hooks from '@wordpress/hooks';
import * as data from '@wordpress/data';
import * as i18n from '@wordpress/i18n';
import * as classnames from 'classnames';
import * as _ from 'lodash';
import * as refractCallbag from 'refract-callbag';
import * as callbagBasics from 'callbag-basics';

/**
 * Prevent the conflicts with WordPress's Underscore lib and other 3rd party plugins.
 */
_.noConflict();

/**
 * Ensures `reactRoot` is available on `window.wp.element`.
 *
 * In React 18 `render` is deprecated and `createRoot` should be used instead.
 * WP 6.2 upgrades React to 18, via `@wordpress/element` (5.0.0).
 * Therefor, we have to support both `render` and `createRoot`.
 *
 * This patch makes it so that we can always use `createRoot` in our code:
 * * If you are on < WP 6.2 you will use `render` via this patch.
 * * If you are on >= WP 6.2 you will use the normal `createRoot`.
 *
 * This patch can be removed once the lowest supported WP version is 6.2.
 * 
 * @props Yoast SEO
 */
if ( ! window.wp?.element?.createRoot && typeof window.wp?.element?.render === "function" ) {
	/**
	 * Adds a monkey patched `createRoot` that returns the old `render` with the new API.
	 * @param {HTMLElement} domNode The node to render in.
	 * @returns {{unmount: (function(): void), render: (function(*): *)}} Polyfill of `createRoot` via `render`.
	 */
	window.wp.element.createRoot = ( domNode ) => ( {
		render: ( reactNode ) => {
			console.warn( "Carbon Fields: Using patched `reactRoot.render()`! Please update to at least WordPress v6.2", domNode );
			window.wp.element.render( reactNode, domNode );
		},
		unmount: () => console.warn( "Carbon Fields: Using patched `reactRoot.unmount()`! Please update to at least WordPress v6.2" )		
	} );
}

/**
 * Setup the vendor variables used by Carbon Fields.
 */
window.cf = window.cf || {};
window.cf.vendor = [
	[ 'react', React ],
	[ 'react-dom', ReactDOM ],
	[ 'nanoid', nanoid ],
	[ 'immer', immer ],
	[ '@wordpress/api-fetch', apiFetch ],
	[ '@wordpress/compose', compose ],
	[ '@wordpress/element', element ],
	[ '@wordpress/hooks', hooks ],
	[ '@wordpress/data', data ],
	[ '@wordpress/i18n', i18n ],
	[ 'classnames', classnames ],
	[ 'lodash', _ ],
	[ 'refract-callbag', refractCallbag ],
	[ 'callbag-basics', callbagBasics ]
].reduce( ( vendors, [ key, implementation ] ) => {
	vendors[ key ] = implementation;

	return vendors;
}, {} );

/**
 * Setup the enviroment variables used by Carbon Fields.
 */
window.cf.hooks = hooks;
window.cf.element = element;
