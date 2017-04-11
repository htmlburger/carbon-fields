var path = require('path');
var webpack = require('webpack');

module.exports = {
	// These are our vendor modules.
	// We make them as DLL to allow faster builds and to export an API that can
	// be consumed by third party developers.
	entry: {
		'carbon.vendor': [
			'babel-polyfill',
			'react',
			'react-dom',
			'react-color',
			'react-redux',
			'redux',
			'redux-saga',
			'redux-saga/effects',
			'redux-actions',
			'reselect',
			'recompose',
			'lodash',
			'object-path-immutable',
			'classnames',
			'react-onclickoutside',
			'jquery-bind-first',
			'fecha',
			'locutus/php/url/urldecode'
		]
	},

	// Setup the output.
	output: {
		// The output directory.
		path: path.resolve(__dirname, 'assets/'),

		// This is the JS bundle containing code from the entry points.
		filename: '[name].js',

		// The name of exported library.
		library: '[name]',

		// The output format.
		libraryTarget: 'this'
	},

	// Setup the sourcemaps.
	devtool: 'cheap-module-source-map',

	// Some of our dependencies are already loaded by WordPress.
	externals: {
		'jquery': 'jQuery'
	},

	// Add aliases to allow easier importing of the modules.
	resolve: {
		modules: [
			path.resolve(__dirname, 'assets/vendor'),
			'node_modules'
		]
	},

	// Setup the plugins.
	plugins: [
		new webpack.ProvidePlugin({
			'jQuery': 'jquery'
		}),

		new webpack.DllPlugin({
			context: __dirname,
			path: path.join(__dirname, 'assets', '[name].json'),
			name: '[name]'
		})
	]
};
