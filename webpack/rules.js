const path = require('path');

const babelServerConfigFile = path.join(__dirname, '..', 'babel.server.config.js');
const babelClientConfigFile = path.join(__dirname, '..', 'babel.client.config.js');

const jsRule = (isServer) => {
	const configFile = isServer ? babelServerConfigFile : babelClientConfigFile;

	return {
		test: /\.(js)$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: { configFile }
			}
		]
	};
};

const jsxRule = (isServer) => {
	const configFile = isServer ? babelServerConfigFile : babelClientConfigFile;

	return {
		test: /\.(jsx)$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					configFile
				}
			}
		]
	};
};

module.exports = ({}, isServer) => {
	return [jsRule(isServer), jsxRule(isServer)];
};
