const presets = [
	[
		"@babel/env"
	]
];

const plugins = [
	"@babel/plugin-proposal-optional-chaining",
	'@babel/plugin-syntax-dynamic-import'
];

module.exports = { presets, plugins };
