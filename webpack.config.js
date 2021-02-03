const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProd = NODE_ENV === 'production';

const config = {
	mode: NODE_ENV,
	output: {
		filename: '[name].js'
	},
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src')
		},
		extensions: ['.js', '.json', '.jsx'],
		modules: ['node_modules']
	},
	watchOptions: {
		ignored: /node_modules/
	},
	target: 'node'
}

module.exports = config;
