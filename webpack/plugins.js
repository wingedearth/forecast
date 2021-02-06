const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const plugins = ({ APP_ID, APP_VERSION, NODE_ENV, isProd }, isServer) => {
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
		isServer &&
			new webpack.DefinePlugin({
				...definePluginBase,
				'process.env.APP_ID': JSON.stringify(APP_ID)
			}),
		isServer &&
			new CopyPlugin({
				patterns: [
					{
						from: './public/**',
						to: path.join(__dirname, '..', 'dist/')
					}
				]
			}),
		!isServer &&
			new webpack.DefinePlugin({
				...definePluginBase
			}),
		!isServer &&
			new MiniCssExtractPlugin({
				filename: 'css/[name].css',
				chunkFilename: 'css/[id].css',
				ignoreOrder: true
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
