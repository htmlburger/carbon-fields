const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = (env) => merge(base(env), {
	entry: {
		'carbon.dll': [
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
			'locutus/php/url/urldecode',
			'./assets/react/core.js',
		]
	},

	output: {
		library: 'carbonDll',
		libraryTarget: 'var'
	},

	plugins: [
		new webpack.DllPlugin({
			name: 'carbonDll',
			context: __dirname,
			path: path.resolve(__dirname, `assets/dist/[name]${env === 'production' ? '.min' : ''}.json`)
		})
	]
});
