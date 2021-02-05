// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const webpack = require('webpack');
const { existsSync } = require('fs');
const path = require('path');
const frontend = require('./webpack.client.config.js');
const backend = require('./webpack.server.config.js');

const getVariables = (includeWatch) => {
	require('dotenv').config();
	const APP_VERSION = process.env.APP_VERSION || process.env.npm_package_version;
	const APP_ID = process.env.APP_ID || null;
	const NODE_ENV = process.env.NODE_ENV || 'development';
	const isProd = NODE_ENV === 'production';
	const mode = isProd ? 'production' : 'development';
	const devtool = isProd ? 'source-map' : 'eval-cheap-module-source-map';
	const watch = !isProd;

	const variables = {
		APP_ID,
		APP_VERSION,
		devtool,
		isProd,
		mode,
		NODE_ENV
	};

	const variablesWatch = {
		...variables,
		watch
	};

	return { variables, variablesWatch };
};

const cb = (error, stats) => {
	if (error) console.error('error:', error);

	console.log(
		stats.toString({
			assets: false,
			chunks: false,
			colors: true,
			moduleAssets: false,
			modules: false,
			entrypoints: 'auto'
		})
	);

	console.log('Build complete.'.brightMagenta);
};

const build = (variables) => {
	console.log('Starting build.'.cyan);
	return Promise.all([webpack(frontend(variables), cb), webpack(backend(variables), cb)]);
};

const prebuild = (build, variables, variablesWatch) => {
	console.log('Prebuilding frontend to build manifest.'.cyan);
	webpack(frontend(variables)).run((error, stats1) => {
		if (error) console.error('error:', error);

		return build(variablesWatch);
	});
};

const startBuild = () => {
	const manifestExists = existsSync(path.join('dist', 'client', 'assets-manifest.json'));
	const { variables, variablesWatch } = getVariables();

	if (manifestExists) {
		console.log('manifest.json found.'.cyan);
		return build(variablesWatch);
	} else {
		console.log('manifest.json not found.'.cyan);
		return prebuild(build, variables, variablesWatch);
	}
};

startBuild();
