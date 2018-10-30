/**
 * External dependencies.
 */
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );

/**
 * Internal dependencies.
 */
const base = require( './webpack.base' );
const paths = require( './paths' );
const wpPackages = require( './wp-packages' );

const config = {
	entry: {
		vendor: './packages/vendor/index.js'
	}
};

module.exports = [
	merge( base, config, {
		output: {
			path: paths.gutenbergBuildPath
		},
		externals: Object.assign( {}, wpPackages.externals, {
			'lodash': 'lodash',
			'react': 'React',
			'react-dom': 'ReactDOM'
		} )
	} ),
	merge( base, config, {
		output: {
			path: paths.classicBuildPath
		},
		plugins: [
			new webpack.ProvidePlugin( wpPackages.providers )
		]
	} )
];
