module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: '> 5%',
		}),
		require('postcss-import'),
		require('postcss-simple-vars'),
		require('cssnano')({
			zindex: false,
		}),
	]
};
