const path = require('path');
const getRules = require('./webpack/rules');
const getPlugins = require('./webpack/plugins');
const getOptimization = require('./webpack/optimization');

const isServer = false;

module.exports = (variables) => {
	const { devtool, mode, watch } = variables;

	return {
		entry: {
			app: path.join(__dirname, 'src', 'entries/app.js')
		},
		output: {
			filename: 'js/[name].js',
			path: path.resolve(__dirname, 'dist', 'client')
		},
		devtool,
		mode,
		watch,
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
				process: 'process/browser'
			},
			extensions: ['.js', '.json', '.jsx', 'css', 'sass', '.scss'],
			modules: ['node_modules']
		},
		module: {
			rules: getRules(variables, isServer)
		},
		optimization: getOptimization(isServer),
		plugins: getPlugins(variables, isServer),
		target: 'web',
		watchOptions: {
			ignored: /node_modules/
		}
	};
};
