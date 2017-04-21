const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = (env) => merge(base(env), {
	entry: {
		'carbon.core': [
			'./assets/js/core.js',
		]
	},

	plugins: [
		new webpack.DllReferencePlugin({
			manifest: require(base.getNameWithSuffix('./assets/dist/carbon.vendor.json', env)),
			sourceType: 'this'
		}),

		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve(__dirname, base.getNameWithSuffix('assets/dist/[name].json', env))
		})
	]
});
