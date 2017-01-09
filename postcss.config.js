module.exports = {
	"use": ["autoprefixer", "postcss-import", "postcss-simple-vars", "cssnano"],
	"input": "assets/postcss/main.css",
	"output": "assets/bundle.css",
	"autoprefixer": {
		"browsers": "> 5%"
	},
	"postcss-import": {
		onImport: function(sources) {
			global.watchCSS( sources );
		}
	},
	"cssnano": {
		zindex: false
	}
};
