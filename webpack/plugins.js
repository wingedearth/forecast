const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const plugins = ({ APP_ID, APP_VERSION, NODE_ENV }, isServer) => {
	const definePluginBase = {
		'process.env.APP_VERSION': JSON.stringify(APP_VERSION),
		'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
	};

	return [
		new WebpackAssetsManifest({
			entrypoints: true,
			publicPath: true,
			writeToDisk: true
		}),
		isServer && new webpack.DefinePlugin({
			...definePluginBase,
			'process.env.APP_ID': JSON.stringify(APP_ID)
		}),
		!isServer && new webpack.DefinePlugin({
			...definePluginBase
		}),
		new CleanWebpackPlugin()
	].filter(Boolean);
};

/**
 * @function getPlugins
 * @param {Boolean} [isServer]
 * @returns {Function}
 */
module.exports = plugins;
