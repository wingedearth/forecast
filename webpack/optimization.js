const serverOptimization = {
	nodeEnv: false
};

const clientOptimization = {
	splitChunks: {
		cacheGroups: {
			vendor: {
				chunks: 'all',
				minChunks: 3,
				test: /node_modules/,
				priority: 100
			},
			common: {
				chunks: 'all',
				minChunks: 3
			}
		}
	}
};

module.exports = (isServer) => (isServer ? serverOptimization : clientOptimization);
