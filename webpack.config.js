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
 * The WordPress packages used across the code.
 *
 * @type {string[]}
 */
const wpPackages = [
	'@wordpress/compose',
	'@wordpress/element',
	'@wordpress/hooks'
];

const wpExternals = wpPackages.reduce( ( externals, package ) => {
	externals[ package ] = [
		'wp',
		package.replace( '@wordpress/', '' )
	];

	return externals;
}, {} );

const wpProxyExternals = wpPackages.reduce( ( externals, package ) => {
	externals[ package ] = [
		'cf',
		'vendor',
		package
	];

	return externals;
}, {} );

const wpProviders = wpPackages.reduce( ( providers, package ) => {
	providers[ wpExternals[ package ].join( '.' ) ] = package;

	return providers;
}, {} );

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
 * The build configuration of `core` package.
 *
 * @type {Object}
 */

const corePackageConfig = {
	entry: './packages/core/index.js',
	output: {
		filename: 'core.js',
		library: [ 'cf', 'core' ],
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
		'classnames': [ 'cf', 'vendor', 'classnames' ]
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
	externals: Object.assign( {}, wpExternals, {
		'@wordpress/components': 'wp.components',
		'@wordpress/blocks': 'wp.blocks',
		'@wordpress/data': 'wp.data',
		'@carbon-fields/core': 'cf.core',
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
		externals: Object.assign( {}, wpExternals, {
			'lodash': 'lodash'
		} )
	} ),
	merge( envPackageConfig, {
		output: {
			path: classicBuildPath
		},
		plugins: [
			new webpack.ProvidePlugin( wpProviders )
		]
	} ),

	/**
	 * ./packages/core
	 */
	merge( corePackageConfig, {
		output: {
			path: gutenbergBuildPath
		},
		externals: Object.assign( {}, wpExternals, {
			'lodash': 'lodash'
		} )
	} ),
	merge( corePackageConfig, {
		output: {
			path: classicBuildPath
		},
		externals: Object.assign( {}, wpProxyExternals, {
			'lodash': [ 'cf', 'vendor', 'lodash' ]
		} )
	} ),

	/**
	 * ./packages/gutenberg
	 */
	gutenbergPackageConfig
];
