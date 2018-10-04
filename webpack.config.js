/**
 * External dependencies.
 */
const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );

/**
 * The absolute path to the build locations.
 *
 * @type {string}
 */
const classicBuildPath = path.resolve( __dirname, 'build/classic' );
const gutenbergBuildPath = path.resolve( __dirname, 'build/gutenberg' );

/**
 * The build configuration of `env` package.
 *
 * @type {Object}
 */
const envPackageConfig = {
	entry: './packages/env/index.js',
	output: {
		filename: 'env.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			}
		]
	}
};

/**
 * The build configuration of `gutenberg` package.
 *
 * @type {Object}
 */
const gutenbergPackageConfig = {
	entry: './packages/gutenberg/index.js',
	output: {
		path: gutenbergBuildPath,
		filename: 'gutenberg.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			}
		]
	},
	externals: {
		'@wordpress/element': 'wp.element',
		'@wordpress/blocks': 'wp.blocks',
		'@wordpress/data': 'wp.data',
		'lodash': 'lodash'
	}
};

module.exports = [
	/**
	 * ./packages/env
	 */
	merge( envPackageConfig, {
		output: {
			path: gutenbergBuildPath
		},
		externals: {
			'lodash': 'lodash'
		}
	} ),
	merge( envPackageConfig, {
		output: {
			path: classicBuildPath
		},
		plugins: [
			new webpack.ProvidePlugin( {
				'window.wp.element': '@wordpress/element'
			} )
		]
	} ),

	/**
	 * ./packages/gutenberg
	 */
	gutenbergPackageConfig
]
