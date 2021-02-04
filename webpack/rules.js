const path = require('path');

const babelConfigFile = path.join(__dirname, '..', 'babel.config.js');

const jsRule = () => {
	return {
		test: /\.(js)$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: { configFile: babelConfigFile }
			}
		]
	};
};

const jsxRule = () => {
	const configFile = babelConfigFile;

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

module.exports = () => {
	return [jsRule(), jsxRule()];
};
