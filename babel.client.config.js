const presets = [
	'@babel/preset-react',
	[
		'@babel/env',
		{
			useBuiltIns: 'entry',
			corejs: '3.8.3'
		}
	]
];

const plugins = ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-syntax-dynamic-import'];

module.exports = { presets, plugins };
