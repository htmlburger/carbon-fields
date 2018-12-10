/**
 * External dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import nanoid from 'nanoid';
import * as compose from '@wordpress/compose';
import * as element from '@wordpress/element';
import * as hooks from '@wordpress/hooks';
import * as data from '@wordpress/data';
import * as classnames from 'classnames';
import * as _ from 'lodash';
import * as refractCallbag from 'refract-callbag';
import * as callbagBasics from 'callbag-basics';

/**
 * Prevent the conflicts with WordPress's Underscore lib.
 */
if ( ! window.lodash ) {
	_.noConflict();
}

/**
 * Setup the vendor variables used by Carbon Fields.
 */
window.cf = window.cf || {};
window.cf.vendor = [
	[ 'react', React ],
	[ 'react-dom', ReactDOM ],
	[ 'nanoid', nanoid ],
	[ '@wordpress/compose', compose ],
	[ '@wordpress/element', element ],
	[ '@wordpress/hooks', hooks ],
	[ '@wordpress/data', data ],
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
