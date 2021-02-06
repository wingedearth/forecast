module.exports = {
	setupFilesAfterEnv: ['jest-enzyme'],
	testEnvironment: 'enzyme',
	testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
	transform: {
		'^.+\\.jsx?$': 'babel-jest'
	},
	moduleNameMapper: {
		'\\.(css|scss|sass)$': 'identity-obj-proxy',
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	coverageDirectory: '<rootDir>/coverage/',
	collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}', '!<rootDir>/src/entries/**'],
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/server/']
};
