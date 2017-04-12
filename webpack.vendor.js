const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = (env) => merge(base(env), {
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

	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve(__dirname, base.getNameWithSuffix('assets/dist/[name].json', env))
		})
	]
});
