const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const colorEmoji = require('postcss-color-emoji');

module.exports = {
	plugins: [autoprefixer, postcssNested, colorEmoji]
};
