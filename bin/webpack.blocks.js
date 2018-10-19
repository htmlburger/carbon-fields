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

module.exports = [
	merge( base, {
		entry: './packages/blocks/index.js',
		output: {
			path: paths.gutenbergBuildPath,
			filename: 'blocks.js'
		},
		externals: Object.assign( {}, wpPackages.externals, {
			'@wordpress/components': 'wp.components',
			'@wordpress/blocks': 'wp.blocks',
			'@wordpress/editor': 'wp.editor',
			'@carbon-fields/core': 'cf.core',
			'lodash': 'lodash'
		 } )
	} )
];
