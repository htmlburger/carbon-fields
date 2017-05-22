const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = () => {
	const env = base.detectEnv();

	return merge(base(env), {
		entry: {
			'carbon.boot': './assets/js/bootstrap.js'
		},

		plugins: [
			new webpack.DllReferencePlugin({
				manifest: require(base.getNameWithSuffix('./assets/dist/carbon.vendor.json', env)),
				sourceType: 'this'
			}),

			new webpack.DllReferencePlugin({
				manifest: require(base.getNameWithSuffix('./assets/dist/carbon.core.json', env)),
				sourceType: 'this'
			})
		]
	});
};
