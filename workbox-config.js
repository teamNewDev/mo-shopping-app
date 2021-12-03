module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,js,css,html,json}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};