const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const APP_VERSION = process.env.APP_VERSION || process.env.npm_package_version;

const plugins = [
	new WebpackAssetsManifest({
		entrypoints: true,
		publicPath: true,
		writeToDisk: true
	}),
	new webpack.DefinePlugin({
		'process.env.APP_VERSION': JSON.stringify(APP_VERSION)
	}),
	new CleanWebpackPlugin({
		verbose: true
	})
];

/**
 * @function getPlugins
 * @param {Boolean} [isServer]
 * @returns {Function}
 */
module.exports = () => plugins;
