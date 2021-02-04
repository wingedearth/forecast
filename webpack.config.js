const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getRules = require('./webpack/rules');
const getPlugins = require('./webpack/plugins');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProd = NODE_ENV === 'production';

const config = {
	devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
	mode: NODE_ENV,
	watch: !isProd,
	entry: {
		server: path.join(__dirname, 'src', 'server', 'server.js')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist', 'server')
	},
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src')
		},
		extensions: ['.js', '.json', '.jsx'],
		modules: ['node_modules']
	},
	module: {
		rules: getRules()
	},
	plugins: getPlugins(),
	watchOptions: {
		ignored: /node_modules/
	},
	target: 'node',
	externals: [nodeExternals({
		allowlist: ['webpack/hot/dev-server', /\.(?!(?:jsx?|json)$).{1,5}$/i]
	})]
}

module.exports = config;
