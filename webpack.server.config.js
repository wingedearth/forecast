const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getRules = require('./webpack/rules');
const getPlugins = require('./webpack/plugins');
const getOptimization = require('./webpack/optimization');

const isServer = true;

const backend = (variables) => {
	const { devtool, mode, watch } = variables;

	return {
		devtool,
		mode,
		watch,
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
			rules: getRules(variables, isServer)
		},
		optimization: getOptimization(isServer),
		plugins: getPlugins(variables, isServer),
		watchOptions: {
			ignored: /node_modules/
		},
		target: 'node',
		externals: [
			nodeExternals({
				allowlist: ['webpack/hot/dev-server', /\.(?!(?:jsx?|json)$).{1,5}$/i]
			})
		]
	};
};

module.exports = backend;
