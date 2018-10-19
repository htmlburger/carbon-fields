/**
 * External dependencies.
 */
const merge = require( 'webpack-merge' );

/**
 * Internal dependencies.
 */
const base = require( './webpack.base' );
const paths = require( './paths' );
const wpPackages = require( './wp-packages' );

const config = {
	entry: './packages/metaboxes/index.js',
	output: {
		filename: 'metaboxes.js'
	},
	externals: {
		'@carbon-fields/core': 'cf.core',
		'classnames': [ 'cf', 'vendor', 'classnames' ]
	},
};

module.exports = [
	merge( base, config, {
		output: {
			path: paths.gutenbergBuildPath
		},
		externals: Object.assign( {}, wpPackages.externals, {
			'lodash': 'lodash'
		} )
	} ),
	merge( base, config, {
		output: {
			path: paths.classicBuildPath
		},
		externals: Object.assign( {}, wpPackages.proxyExternals, {
			'lodash': [ 'cf', 'vendor', 'lodash' ]
		} )
	} )
];
