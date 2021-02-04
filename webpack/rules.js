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

module.exports = () => {
	return [jsRule()];
};
