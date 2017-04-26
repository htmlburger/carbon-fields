module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-simple-vars'),
		require('autoprefixer')({
			browsers: '> 5%',
		}),
		require('cssnano')({
			reduceIdents: false,
			zindex: false,
		}),
	]
};

