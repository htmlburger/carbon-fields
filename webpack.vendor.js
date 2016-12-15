var path = require('path');
var webpack = require('webpack');

module.exports = {
	// These are our vendor modules.
	// We make them as DLL to allow faster builds and to export an API that can
	// be consumed by third party developers.
	entry: {
		'carbon.vendor': [
			'react',
			'react-dom',
			'react-color',
			'react-redux',
			'redux',
			'redux-saga',
			'redux-actions',
			'reselect',
			'lodash',
			'object-path-immutable',
			'classnames'
		]
	},

	// Setup the output.
	output: {
		// The output directory.
		path: 'assets/',

		// This is the JS bundle containing code from the entry points.
		filename: '[name].js',

		// The name of exported library.
		library: '[name]',

		// The output format.
		libraryTarget: 'this'
	},

	// Setup the plugins.
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, 'assets', '[name].json'),
			name: '[name]'
		}),

		new webpack.optimize.OccurenceOrderPlugin()
	]
};
