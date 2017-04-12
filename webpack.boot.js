const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = (env) => merge(base(env), {
	entry: {
		'carbon.boot': './assets/js/bootstrap.js'
	},

	output: {
		library: 'carbonBoot',
		libraryTarget: 'var'
	},

	plugins: [
		new webpack.DllReferencePlugin({
			manifest: require(`./assets/dist/carbon.dll${env === 'production' ? '.min' : ''}.json`),
			context: __dirname,
			sourceType: 'var'
		})
	]
});
