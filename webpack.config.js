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
 * The configuration of build's stats.
 *
 * @type {Object}
 */
const stats = {
	modules: false,
	hash: false,
	builtAt: false
};

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
	},
	stats
};

/**
 * The build configuration for the rest of packages.
 *
 * @type {Object}
 */
const otherPackages = [
	'fields'
];

const otherPackagesConfig = {
	entry: otherPackages.reduce( ( entries, name ) => {
		entries[ name ] = `./packages/${ name }`;

		return entries;
	}, {} ),
	output: {
		filename: '[name].js',
		library: [ 'cf', '[name]' ],
		libraryTarget: 'this'
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
		'@wordpress/components': ['wp', 'components'],
		'@carbon-fields/element': [ 'cf', 'element' ],
		'lodash': 'lodash'
	},
	stats
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
	externals: otherPackages.reduce( ( externals, name ) => {
		externals[ `@carbon-fields/${ name }` ] = [ 'cf', name ];

		return externals;
	}, {
		'@wordpress/components': 'wp.components',
		'@wordpress/element': 'wp.element',
		'@wordpress/blocks': 'wp.blocks',
		'@wordpress/data': 'wp.data',
		'@wordpress/hooks': 'wp.hooks',
		'lodash': 'lodash'
	} ),
	stats
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
	 * ./packages/*
	 */
	merge( otherPackagesConfig, {
		output: {
			path: gutenbergBuildPath
		}
	} ),
	merge( otherPackagesConfig, {
		output: {
			path: classicBuildPath
		},
		plugins: [
			new webpack.ProvidePlugin( {
				'wp.components': '@wordpress/components'
			} )
		]
	} ),

	/**
	 * ./packages/gutenberg
	 */
	gutenbergPackageConfig
];
