const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelServerConfigFile = path.join(__dirname, '..', 'babel.server.config.js');
const babelClientConfigFile = path.join(__dirname, '..', 'babel.config.js');

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

const styleRule = ({ isProd }, isServer) => {
	const rule = {
		test: /\.(sa|sc|c)ss$/,
		exclude: /node_modules/,
		use: ['css-loader', 'postcss-loader', 'sass-loader'].filter(Boolean)
	};

	if (!isServer) {
		rule.use.unshift(MiniCssExtractPlugin.loader);
	}

	return rule;
};

const imageRule = (isServer) => ({
	test: /\.(png|jpg|jpeg|gif|ico)$/,
	exclude: /node_modules/,
	use: [
		{
			loader: 'file-loader',
			options: {
				publicPath: '/',
				outputPath: '../images',
				name: '[name].[ext]',
				emitFile: isServer
			}
		}
	]
});

module.exports = (variables, isServer) => {
	return [
		jsRule(isServer),
		jsxRule(isServer),
		styleRule(variables, isServer),
		imageRule(isServer)
	];
};
